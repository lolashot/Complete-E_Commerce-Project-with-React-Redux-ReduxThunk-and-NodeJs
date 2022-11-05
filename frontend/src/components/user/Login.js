import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = () => {
  let navigate = useNavigate();
  let params = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  
  
  const submitHandler = (e)=> {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />
          <main className="main__content_wrapper">
            <section className="breadcrumb__section breadcrumb__bg">
              <div className="container">
                <div className="row row-cols-1">
                  <div className="col">
                    <div className="breadcrumb__content text-center">
                      <h1 className="breadcrumb__content--title text-white mb-25">
                        Account Page
                      </h1>
                      <ul className="breadcrumb__content--menu d-flex justify-content-center">
                        <li className="breadcrumb__content--menu__items">
                          <Link className="text-white" to="/">
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

            <div className="login__section section--padding">
              <div className="container">
                <form action="#" onSubmit={submitHandler}>
                  <div className="login__section--inner">
                    <div className="row row-cols-md-2 row-cols-1">
                      <div className="col">
                        <div className="account__login">
                          <div className="account__login--header mb-25">
                            <h2 className="account__login--header__title h3 mb-10">
                              Login
                            </h2>
                            <p className="account__login--header__desc">
                              Login if you area a returning customer.
                            </p>
                          </div>
                          <div className="account__login--inner">
                            <input
                              className="account__login--input"
                              placeholder="Email Addres"
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                              className="account__login--input"
                              placeholder="Password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                              <div className="account__login--remember position__relative">
                                <input
                                  className="checkout__checkbox--input"
                                  id="check1"
                                  type="checkbox"
                                />
                                <span className="checkout__checkbox--checkmark"></span>
                                <label
                                  className="checkout__checkbox--label login__remember--label"
                                  for="check1"
                                >
                                  Remember me
                                </label>
                              </div>
                              <Link to="/password/forgot">
                              <button
                                className="account__login--forgot"
                                type="submit"
                              >
                                Forgot Your Password?
                              </button>
                              </Link>
                            </div>
                            <button
                              className="account__login--btn primary__btn"
                              type="submit"
                            >
                              Login
                            </button>
                            <div className="account__login--divide">
                              <span className="account__login--divide__text">
                                OR
                              </span>
                            </div>
                            <div className="account__social d-flex justify-content-center mb-15">
                              <Link
                                className="account__social--link facebook"
                                target="_blank"
                                to="https://www.facebook.com/"
                              >
                                Facebook
                              </Link>
                              <Link
                                className="account__social--link google"
                                target="_blank"
                                href="https://www.google.com/"
                              >
                                Google
                              </Link>
                              <Link
                                className="account__social--link twitter"
                                target="_blank"
                                to="https://twitter.com/"
                              >
                                Twitter
                              </Link>
                            </div>
                            <p className="account__login--signup__text">
                              Don,t Have an Account?{" "}
                              <Link to= '/register'>
                              <button type="submit">Sign up now</button>
                            </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <section className="shipping__section2 shipping__style3 section--padding pt-0">
              <div className="container">
                <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping1.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 className="shipping__items2--content__title h3">
                        Shipping
                      </h2>
                      <p className="shipping__items2--content__desc">
                        From handpicked sellers
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping2.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 className="shipping__items2--content__title h3">
                        Payment
                      </h2>
                      <p className="shipping__items2--content__desc">
                        From handpicked sellers
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping3.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 className="shipping__items2--content__title h3">
                        Return
                      </h2>
                      <p className="shipping__items2--content__desc">
                        From handpicked sellers
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping4.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 className="shipping__items2--content__title h3">
                        Support
                      </h2>
                      <p className="shipping__items2--content__desc">
                        From handpicked sellers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
