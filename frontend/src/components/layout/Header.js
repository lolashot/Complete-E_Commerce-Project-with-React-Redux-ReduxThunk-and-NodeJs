import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className="header__section">
        <div className="main__header header__sticky bgcolor">
          <div className="container-fluid">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="main__logo">
                <a className="main__logo--link" href="index.html">
                  <img
                    className="main__logo--img"
                    src="assets/img/logo/nav-log.png"
                    alt="logo-img"
                  />
                </a>
              </div>
              <div className="header__search--widget header__sticky--none d-none d-lg-block">
                <form className="d-flex header__search--form" action="#">
                  <div className="header__search--box">
                    <label>
                      <input
                        className="header__search--input"
                        placeholder="Keyword here..."
                        type="text"
                      />
                    </label>
                    <button
                      className="header__search--button bg__secondary text-white"
                      type="submit"
                      aria-label="search button"
                    >
                      <svg
                        className="header__search--button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27.51"
                        height="26.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        ></path>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M338.29 338.29L448 448"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="header__account header__sticky--none">
                <ul className="d-flex">
                  <li className="header__account--items">
                    <a className="header__account--btn" href="my-account.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        />
                      </svg>
                      <span className="header__account--btn__text">
                        Log in
                      </span>
                    </a>
                  </li>

                  <li className="header__account--items">
                    <a
                      className="header__account--btn minicart__open--btn"
                      href="cart.html"
                      data-offcanvas
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 14.706 13.534"
                      >
                        <g transform="translate(0 0)">
                          <g>
                            <path
                              data-name="Path 16787"
                              d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                              transform="translate(0 -463.248)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16788"
                              d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                              transform="translate(-1.191 -466.622)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16789"
                              d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                              transform="translate(-2.875 -466.622)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                      <span className="header__account--btn__text">
                        {" "}
                        My cart
                      </span>
                      <span className="items__count">02</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container-fluid">
            <div className="header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center">
              <div className="header__menu">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <a className="header__menu--link" href="about.html">
                        Home
                      </a>
                    </li>

                    <li className="header__menu--items">
                      <a className="header__menu--link" href="about.html">
                        Cart{" "}
                      </a>
                    </li>

                    <li className="header__menu--items">
                      <a className="header__menu--link" href="about.html">
                        About US{" "}
                      </a>
                    </li>

                    <li className="header__menu--items">
                      <a className="header__menu--link" href="contact.html">
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <p className="header__discount--text">
                <img
                  className="header__discount--icon__img"
                  src="assets/img/icon/lamp.png"
                  alt="lamp-img"
                />{" "}
                Special up to 60% Off all item
              </p>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
