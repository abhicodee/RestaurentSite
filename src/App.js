import React from "react";
import Mainpage from "./components/Homepage/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Career from "./components/Career/Career";
import Nav from "./components/Homepage/Nav";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/product" element={<Product />}></Route>
        <Route exact path="/career" element={<Career />}></Route>
      </Routes>
      
    </BrowserRouter>
    
  );
};
export default App;
