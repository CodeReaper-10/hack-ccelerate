import React from "react";

const FormLO = (props) => {
    return (
        <div className="-mt-10 flex justify-center items-center h-screen">
            <div
                id="form"
                className="block  p-6 rounded-xl shodow-md shadow-slate-300 w-90"
            >
                <form>
                    <h2 className="text-[#00df8c] text-3xl font-semibold my-4">
                        {`Login as a ${props.type}`}
                    </h2>

                    {/* email */}
                    <label for="email" className="text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        name=""
                        id="email"
                        className="mb-2 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    ></input>

                    {/* password */}
                    <label for="password" className="text-sm">
                        Password
                    </label>
                    <input
                        type="password"
                        name=""
                        id="password"
                        className="mb-2 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    ></input>

                    {/* submit */}
                    <input
                        type="submit"
                        name=""
                        id="login"
                        className="bg-[#00df8c] mt-5 w-full h-10 cursor-pointer text-black rounded-md  hover:outline outline-2 outline-[#00df8c] outline-offset-2 text-sm -mb-2"
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default FormLO;
