import React, { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <main class="main__content_wrapper">
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content text-center">
                  <h1 className="breadcrumb__content--title text-white mb-25">
                    Hello
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex justify-content-center">
                    <li className="breadcrumb__content--menu__items">
                      <a className="text-white" href="index.html">
                        LETS
                      </a>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text-white">SHOP IT</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="shop__section section--padding pt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="shop__sidebar--widget widget__area d-none d-lg-block">
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Categories</h2>
                    <ul className="widget__categories--menu">
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <span className="widget__categories--menu__text">
                            Bags
                          </span>
                        </label>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <span className="widget__categories--menu__text">
                            Shoes
                          </span>
                        </label>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <span className="widget__categories--menu__text">
                            Shirts
                          </span>
                        </label>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <span className="widget__categories--menu__text">
                            Skirts
                          </span>
                        </label>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <span className="widget__categories--menu__text">
                            Wrist Watches
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className="single__widget price__filter widget__bg">
                    <h2 className="widget__title h3">Filter By Price</h2>
                    <form className="price__filter--form" action="#">
                      <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                        <div className="price__filter--group">
                          <label
                            className="price__filter--label"
                            for="Filter-Price-GTE2"
                          >
                            From
                          </label>
                          <div className="price__filter--input border-radius-5 d-flex align-items-center">
                            <span className="price__filter--currency">$</span>
                            <label>
                              <input
                                className="price__filter--input__field border-0"
                                name="filter.v.price.gte"
                                type="number"
                                placeholder="0"
                                min="0"
                                max="250.00"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="price__divider">
                          <span>-</span>
                        </div>
                        <div className="price__filter--group">
                          <label
                            className="price__filter--label"
                            for="Filter-Price-LTE2"
                          >
                            To
                          </label>
                          <div className="price__filter--input border-radius-5 d-flex align-items-center">
                            <span className="price__filter--currency">$</span>
                            <label>
                              <input
                                className="price__filter--input__field border-0"
                                name="filter.v.price.lte"
                                type="number"
                                min="0"
                                placeholder="250.00"
                                max="250.00"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        className="price__filter--btn primary__btn"
                        type="submit"
                      >
                        Filter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="shop__product--wrapper">
                  <div className="tab_content">
                    <div id="product_grid" className="tab_pane active show">
                      <div className="product__section--inner product__grid--inner">
                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                          <div className="col mb-30">
                            <div className="product__items ">
                              <div className="product__items--thumbnail">
                                <a
                                  className="product__items--link"
                                  href="product-details.html"
                                >
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="assets/img/product/product1.png"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="assets/img/product/product2.png"
                                    alt="product-img"
                                  />
                                </a>
                                <div className="product__badge">
                                  <span className="product__badge--items sale">
                                    Sale
                                  </span>
                                </div>
                              </div>
                              <div className="product__items--content">
                                <span className="product__items--content__subtitle">
                                  Jacket, Women
                                </span>
                                <h3 className="product__items--content__title h4">
                                  <a href="product-details.html">
                                    Oversize Cotton Dress
                                  </a>
                                </h3>
                                <div className="product__items--price">
                                  <span className="current__price">$110</span>
                                  <span className="price__divided"></span>
                                  <span className="old__price">$78</span>
                                </div>
                                <ul className="rating product__rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.105"
                                        height="14.732"
                                        viewBox="0 0 10.105 9.732"
                                      >
                                        <path
                                          data-name="star - Copy"
                                          d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                          transform="translate(0 -0.018)"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.105"
                                        height="14.732"
                                        viewBox="0 0 10.105 9.732"
                                      >
                                        <path
                                          data-name="star - Copy"
                                          d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                          transform="translate(0 -0.018)"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.105"
                                        height="14.732"
                                        viewBox="0 0 10.105 9.732"
                                      >
                                        <path
                                          data-name="star - Copy"
                                          d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                          transform="translate(0 -0.018)"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.105"
                                        height="14.732"
                                        viewBox="0 0 10.105 9.732"
                                      >
                                        <path
                                          data-name="star - Copy"
                                          d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                          transform="translate(0 -0.018)"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.105"
                                        height="14.732"
                                        viewBox="0 0 10.105 9.732"
                                      >
                                        <path
                                          data-name="star - Copy"
                                          d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                          transform="translate(0 -0.018)"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </li>
                                </ul>
                                <ul className="product__items--action d-flex">
                                  <li className="product__items--action__list">
                                    <a
                                      className="product__items--action__btn add__to--cart"
                                      href="cart.html"
                                    >
                                      <svg
                                        className="product__items--action__btn--svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.51"
                                        height="20.443"
                                        viewBox="0 0 14.706 13.534"
                                      >
                                        <g transform="translate(0 0)">
                                          <g>
                                            <path
                                              data-name="Path 16787"
                                              d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                              transform="translate(0 -463.248)"
                                              fill="currentColor"
                                            ></path>
                                            <path
                                              data-name="Path 16788"
                                              d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                              transform="translate(-1.191 -466.622)"
                                              fill="currentColor"
                                            ></path>
                                            <path
                                              data-name="Path 16789"
                                              d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                              transform="translate(-2.875 -466.622)"
                                              fill="currentColor"
                                            ></path>
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="add__to--cart__text">
                                        {" "}
                                        + Add to cart
                                      </span>
                                    </a>
                                  </li>
                                  <li className="product__items--action__list">
                                    <a
                                      className="product__items--action__btn"
                                      href="wishlist.html"
                                    >
                                      <svg
                                        className="product__items--action__btn--svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25.51"
                                        height="23.443"
                                        viewBox="0 0 512 512"
                                      >
                                        <path
                                          d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="32"
                                        ></path>
                                      </svg>
                                      <span className="visually-hidden">
                                        Wishlist
                                      </span>
                                    </a>
                                  </li>
                                  <li className="product__items--action__list">
                                    <a
                                      className="product__items--action__btn"
                                      data-open="modal1"
                                      href="javascript:void(0)"
                                    >
                                      <svg
                                        className="product__items--action__btn--svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25.51"
                                        height="23.443"
                                        viewBox="0 0 512 512"
                                      >
                                        <path
                                          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="32"
                                        />
                                        <circle
                                          cx="256"
                                          cy="256"
                                          r="80"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-miterlimit="10"
                                          stroke-width="32"
                                        />
                                      </svg>
                                      <span className="visually-hidden">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination__area bg__gray--color">
                    <nav className="pagination justify-content-center">
                      <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                        <li className="pagination__list">
                          <a
                            href="shop.html"
                            className="pagination__item--arrow  link "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22.51"
                              height="20.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="48"
                                d="M244 400L100 256l144-144M120 256h292"
                              />
                            </svg>
                            <span className="visually-hidden">
                              pagination arrow
                            </span>
                          </a>
                        </li>
                        <li className="pagination__list">
                          <span className="pagination__item pagination__item--current">
                            1
                          </span>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            2
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            3
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            4
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a
                            href="shop.html"
                            className="pagination__item--arrow  link "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22.51"
                              height="20.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="48"
                                d="M268 112l144 144-144 144M392 256H100"
                              />
                            </svg>
                            <span className="visually-hidden">
                              pagination arrow
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
