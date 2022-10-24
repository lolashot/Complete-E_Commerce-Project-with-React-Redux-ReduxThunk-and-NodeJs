const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//Handled Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.stack}`);
    console.log('Shutting down the server due to Uncaught exception');
    process.exit(1)
})

// Setting up config file
dotenv.config({ path: 'backend/config/config.env' })


//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//Handled Promise Rejection
process.on('unhandledRejection', err => {
    console.log(`Error. ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise Rejection');
    server.close(() => {
        process.exit(1)
    })
})