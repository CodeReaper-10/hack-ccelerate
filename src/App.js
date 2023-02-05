import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import ServiceItems from "./components/ServiceItems";
import ServiceCard from "./components/ServiceCard";
import SignUpUser from "./pages/SignUpUser";
import SignUpBusiness from "./pages/SignUpBusiness";
import LoginUser from "./pages/LoginUser";
import LoginBusiness from "./pages/LoginBusiness";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import About from "./pages/About";

const App = () => {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service/:id" element={<Services />} />
                    <Route path="/registerUser" element={<SignUpUser />} />
                    <Route
                        path="/registerBusiness"
                        element={<SignUpBusiness />}
                    />
                    <Route path="/loginUser" element={<LoginUser />} />
                    <Route path="/loginBusiness" element={<LoginBusiness />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
