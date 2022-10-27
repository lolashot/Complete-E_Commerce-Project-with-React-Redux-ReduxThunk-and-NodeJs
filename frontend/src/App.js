import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
      <BrowserRouter>
          <div className="">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
