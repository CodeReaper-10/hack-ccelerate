import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df8c] ml-auto ">
                <AiOutlineCar className="inline" />
                (Project Name)
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link to="/registerUser">Services</Link>
                </li>
                <li className="p-4">
                    <Link to="/registerBusiness">Business</Link>
                </li>
                <li className="p-4">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <AiOutlineClose size={20} fixed />
                ) : (
                    <AiOutlineMenu size={25} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[63%] md:hidden lg:hidden h-full border-r border-r-gray-800 bg-[#000031] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#00df8c] m-8 p-6">
                    <AiOutlineCar className="inline" />
                    (Project Name)
                </h1>
                <ul className="pt-12 uppercase p-4">
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/registerUser">Services</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/registerBusiness">Business</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
