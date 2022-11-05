import React, { useEffect, useState, Fragment } from "react";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register, clearErrors } from "../../actions/userActions";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [topklazzicshop, setTopklazzicShop] = useState("");
  const [topklazzicshoppreview, setTopklazzicShopPreview] = useState(
    "./images/default_topklazzicshop.jpg"
  );

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("topklazzicshop", topklazzicshop);

    dispatch(register(formData));
  };

  const onChange = e =>{
    if (e.target.name === 'topklazzicshop'){
      const reader = new FileReader(); 
      reader.onload = () => {
        if(reader.readyState === 2) {
            setTopklazzicShopPreview(reader.result)
            setTopklazzicShop(reader.result)
        }
      }

      reader.readAsDataURL(e.target.files[0])

    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Registration"} />
          <main className="main__content_wrapper">
            <section className="breadcrumb__section breadcrumb__bg">
              <div className="container">
                <div className="row row-cols-1">
                  <div className="col">
                    <div className="breadcrumb__content text-center">
                      <h1 className="breadcrumb__content--title text-white mb-25">
                        Registration Page
                      </h1>
                      <ul className="breadcrumb__content--menu d-flex justify-content-center">
                        <li className="breadcrumb__content--menu__items">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li className="breadcrumb__content--menu__items">
                          <span className="text-white">Account Page</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <div className="col-6">
                <div className="account__login register">
                  <div className="account__login--header mb-25">
                    <h2 className="account__login--header__title h3 mb-10">
                      Create an Account
                    </h2>
                    <p className="account__login--header__desc">
                      Register here if you are a new customer
                    </p>
                  </div>
                  <div className="account__login--inner">
                    <input
                      className="account__login--input"
                      placeholder="Name"
                      type="name"
                      name="name"
                      value={name}
                      onChange={onChange}
                    />
                    <input
                      className="account__login--input"
                      placeholder="Email Addres"
                      type="email"
                      name="email"
                      value={email}                      
                      onChange={onChange}
                    />
                    <input
                      className="account__login--input"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}                      
                      onChange={onChange}
                    />
                    <input
                      className="account__login--input"
                      placeholder="Confirm Password"
                      type="password"
                    />
                    <button 
                    disabled={loading ? true : false }
                      className="account__login--btn primary__btn mb-10"
                      type="submit"
                    >
                      Submit & Register
                    </button>
                    <div className="account__login--remember position__relative">
                      <input
                        className="checkout__checkbox--input"
                        id="check2"
                        type="checkbox"
                      />
                      <span className="checkout__checkbox--checkmark"></span>
                      <label
                        className="checkout__checkbox--label login__remember--label"
                        for="check2"
                      >
                        I have read and agree to the terms & conditions
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-6">
                <div className="form-group">
                    <label htmlFor='avatar_upload'>Avatar</label>
                    <div className="d-flex align-items-center">
                        <div>
                            <figure className="avatar mr-3 item-rt1">
                                <img
                                    src={topklazzicshoppreview}
                                    className="rounded-circle"
                                    alt="Avatar Preview"/>
                            </figure>
                        </div>
                        <div className="'custom-file">
                            <input
                                 type='file'
                                 name= 'avatar'
                                 className="custom-file-input"
                                 id='customFile'
                                 accept="images/*"
                                 onChange={onChange}
                                 ></input>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Register;
