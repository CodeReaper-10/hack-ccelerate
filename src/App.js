import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* This is the landing page */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
