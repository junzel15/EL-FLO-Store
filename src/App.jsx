import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
