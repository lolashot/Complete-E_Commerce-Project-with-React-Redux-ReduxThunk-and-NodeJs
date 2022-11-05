import React, { Fragment, useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import axios from "axios";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";
import { useLocation } from 'react-router-dom'


export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('')
  const alert = useAlert();
  const dispatch = useDispatch();
  
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );
  const location = useLocation();

  if (location.state !== null && location.pathname === `/search/${location.state.keyword}`) {
    location.state.keyword = setKeyword(location.state.keyword)
  }
  console.log('dloca', location);


  if (location.state == null) {
    location.state = {
      ...location.state,
      keyword: ''
    }
    location.state.keyword = setKeyword(location.state.keyword)
  }



  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, ));
  }, [dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          <main className="main__content_wrapper pt-5">
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
            <section className="shipping__section2 shipping__style3 section--padding pt-5">
              <div className="container">
                <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                  <div className="shipping__items2 d-flex align-items-center">
                    <div class="shipping__items2--icon">
                      <img src="assets/img/other/shipping1.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 className="shipping__items2--content__title h3">
                        SECURE SHOPPING
                      </h2>
                      <p className="shipping__items2--content__desc">
                        Free Order over $300
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping2.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        ACCEPT PAYMENT
                      </h2>
                      <p className="shipping__items2--content__desc">
                        PAYPAL, VISA, MASTER
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div class="shipping__items2--icon">
                      <img src="assets/img/other/shipping3.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        30 DAY RETURN
                      </h2>
                      <p className="shipping__items2--content__desc">
                        30 days guarantee
                      </p>
                    </div>
                  </div>
                  <div className="shipping__items2 d-flex align-items-center">
                    <div className="shipping__items2--icon">
                      <img src="assets/img/other/shipping4.png" alt="" />
                    </div>
                    <div className="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        24/7 SUPPORT
                      </h2>
                      <p className="shipping__items2--content__desc">
                        Support everytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <section className="shop__section section--padding pt-1">
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
                                htmlFor="Filter-Price-GTE2"
                              >
                                From
                              </label>
                              <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                <span className="price__filter--currency">
                                  $
                                </span>
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
                                htmlFor="Filter-Price-LTE2"
                              >
                                To
                              </label>
                              <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                <span className="price__filter--currency">
                                  $
                                </span>
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
                              { products &&
                                
                                products.map(product => (
                                  <Product key={product._id}
                                    product={product}
                                  />
                                )
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {resPerPage <= productsCount && (
                        <div className=" d-flex  justify-content-center mt-5">
                          <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={"Next"}
                            prevPageText={"Prev"}
                            firstPageText={"First"}
                            lastPageText={"Last"}
                            itemClass="page-item"
                            linkClass="page-link"
                          />
                        </div>
                      )}
                      
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

export default Home;
