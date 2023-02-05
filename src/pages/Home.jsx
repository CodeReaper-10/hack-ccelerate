import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../index.css";

const Home = () => {
    return (
        <div id="home">
            <Navbar black="true" />
            <Hero />
        </div>
    );
};

export default Home;
