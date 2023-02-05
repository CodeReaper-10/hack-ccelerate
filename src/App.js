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
import Container from "./components/Container";
import Services from "./pages/Services";

const App = () => {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />{" "}
                    {/* Home is the landing page */}
                    <Route path="/service/:id" element={<Services />} />
                    <Route path="/registerUser" element={<SignUpUser />} />
                    <Route
                        path="/registerBusiness"
                        element={<SignUpBusiness />}
                    />
                    <Route path="/loginUser" element={<LoginUser />} />
                    <Route path="/loginBusiness" element={<LoginBusiness />} />
                    <Route path="/test" element={<Container />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
