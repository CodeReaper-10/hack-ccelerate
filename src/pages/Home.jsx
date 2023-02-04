import React from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../index.css";

const Home = () => {
    return (
        <div id="home">
            <Navbar />
            <Hero />
            {/* <Container/> */}
        </div>
    );
};

export default Home;
