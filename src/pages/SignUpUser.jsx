import React from "react";
import FormSU from "../components/FormSU";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SignUpUser = () => {
    return (
        <div>
            <Navbar />
            <FormSU type="User" />
            <h1 className="-mt-20 flex justify-center items-center">
                Already have an account?
                <Link className="underline ml-1" to="/loginUser">
                    Login!
                </Link>
            </h1>
        </div>
    );
};

export default SignUpUser;
