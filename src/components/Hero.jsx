import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="mt-48 ml-14 sm:text-lg">
            A one stop solution for all your road trip needs!
            <br />
            <br />
            Register now as a user or a business to get started!
            <br /> <br />
            <div className="ml-14">
                <Link to="/registerUser">
                    <button className="bg-[#00df8c] text-black px-4 py-2 rounded-lg mt-4">
                        Service
                    </button>
                </Link>
                <Link to="/registerBusiness">
                    <button className="bg-[#00df8c] text-black px-4 py-2 rounded-lg mt-4 ml-4">
                        Business
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
