import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import ServiceItems from "./components/ServiceItems";
import ServiceCard from "./components/ServiceCard";

const App = () => {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<ServiceCard />} />
                    <Route path="/service/:id" element={<ServiceCard />} />
 
                    {/* This is the landing page */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
