import React from "react";
import FormLO from "../components/FormLO";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const LoginUser = () => {
    return (
        <div>
            <Navbar />
            <FormLO type="User" />
            <h1 className="-mt-40 flex justify-center items-center">
                Don't have an account?
                <Link className="underline ml-1" to="/registerUser">
                    Sign Up!
                </Link>
            </h1>
        </div>
    );
};

export default LoginUser;
