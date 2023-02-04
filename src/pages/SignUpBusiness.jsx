import React from "react";
import Navbar from "../components/Navbar";
import FormSU from "../components/FormSU";
import { Link } from "react-router-dom";

const SignUpBusiness = () => {
    return (
        <div>
            <Navbar />
            <FormSU type="Business" />
            <h1 className="-mt-20 flex justify-center items-center">
                Already have an account?
                <Link className="underline" to="/loginBusiness">
                    Login
                </Link>
            </h1>
        </div>
    );
};

export default SignUpBusiness;
