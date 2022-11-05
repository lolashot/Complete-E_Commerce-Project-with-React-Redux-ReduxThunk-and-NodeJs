import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

import "./assets/css/plugins/swiper-bundle.min.css";
import "./assets/css/plugins/glightbox.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register"
import ProductDetails from "./components/product/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route  path="/search/:keyword" element={<Home/>} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
