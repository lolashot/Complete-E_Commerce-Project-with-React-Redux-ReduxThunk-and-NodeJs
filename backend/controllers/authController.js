
const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

const crypto = require('crypto');
const cloudinary = require('cloudinary');

//Register a user     => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'topklazzicshop',
        width: 150,
        crop: "scale"
    })
    
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            //public_id: '/123456',//
            public_id: result.public_id,
            url: result.secure_url
            //url: 'https://random.imagecdn.app/100/100'//
        }
    });
    // const token = user.getJwtToken();

    // res.status(201).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 200, res)
    
})

    //login user    api/v1/login
    exports.loginUser = catchAsyncErrors( async (req, res, next) => {
    
        const { email, password } = req.body;

        //checks if email and password is
        if (!email || !password) {
            return next(new ErrorHandler('Please enter email and password', 400));
        }

        //finding user in database
    
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }

        //checks if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }
        
        // const token = user.getJwtToken();
    
        // res.status(200).json({
        //     success: true,
        //     token
        // })

            sendToken(user, 200, res)

    }) 


    //Forgot Password    =>     /api/v1/logout
    exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return next(new ErrorHandler('User not found with this email', 404));
        }

        //Get reset token
        const resetToken = user.getResetPasswordtoken();

        await user.save({validateBeforeSave: false });

        //Create Reset Password URL
        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

        const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`
            try {
                await sendEmail({
                    email: user.email,
                    subject: 'ShopIT Password Recovery',
                    message
                })
                res.status(200).json({
                    success: true,
                    message: `Email sent to: ${user.email}`
                })
            } catch (error) {
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;

                await user.save({ validateBeforeSave: false });
                return next(new ErrorHandler(error.message, 500))
            }
            })

        //Reset Password    =>     /api/v1/password/reset/:token
        exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
            //HAsh URL Token
            const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
            const user = await User.findOne({ 
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            })            
            if (!user) {
                return next(new ErrorHandler('Password Reset Token is Invalid Or Has Expired', 400)
                    )
            }
            if (req.body.password !== req.body.confirmPassword) {
                return next(new ErrorHandler('Password Does Not Match', 400))
            }
            //Setup New Password
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            sendToken(user, 200, res);
        })


        //Get currently logged in user details => /
        exports.getUserProfile = catchAsyncErrors( async (req, res, next) => {
            const user = await User.findById(req.user.id);

            res.status(200).json({
                success: true,
                user
            })
        })

         

        // Update / Change Password    =>     /api/v1/password/update
        exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
            const user = await User.findById(req.user.id).select('+password');

            // Check previous user password
            const isMatched = await user.comparePassword(req.body.oldPassword)
            if (!isMatched) {
                return next(new ErrorHandler('Incorrect old password', 400));    
            }
            user.password = req.body.password;
            await user.save();

            sendToken(user, 200, res)

        })

        // Update user profile    =>     /api/v1/me/update
        exports.updateProfile = catchAsyncErrors(  async (req, res, next) => {
            const newUserData  = {
            name: req.body.name,
            email: req.body.email
        }

        //Update avatar: TODO

        const user = await User.findByIdAndUpdate(req.user.id, newUserData , {
            new: true,
            runValidators: true,
            userFindAndModify: false
        })

        res.status(200).json({
            success: true
        })

        
        })

        // Logout user => /api/v1/logout

    exports.logout = catchAsyncErrors( async (req, res, next) => {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: 'Logged Out'
        })
    })      