import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Product from "./components/Product";
import User from "./components/User";
import Login from "./components/Login";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContectUs from "./components/ContectUs";
import Logout from "./components/Logout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Users" element={<User />} />
          <Route path="/Contect" element={<ContectUs />} />
          <Route path="/" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
