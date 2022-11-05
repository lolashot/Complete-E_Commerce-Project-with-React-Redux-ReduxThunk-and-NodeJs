import React, { Fragment, useEffect } from "react";
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import axios from 'axios';
import Product from './product/Product'

export const Home = () => {

  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(() => {
    var myproducts = dispatch(getProducts());
    console.log ('products', products)
}, [dispatch])
 
  return (
    <Fragment>

{loading ? <h1>Loading...</h1> : (
<Fragment>
<MetaData title={'Buy Best Products'}/>
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
                            htmlFor="Filter-Price-LTE2"
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
                          {products && products.map(product => (
                            <Product key={product._id} product={product} />
                          ))}
                      
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
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

)}
    
        
    </Fragment>
  );
};

export default Home;
