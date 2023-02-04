import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import ServiceItems from "./components/ServiceItems";

const App = () => {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<ServiceItems />} />
 
                    {/* This is the landing page */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
