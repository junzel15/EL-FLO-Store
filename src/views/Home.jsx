import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <div className="logo-container1">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
    </Container>
  );
};

export default Home;
