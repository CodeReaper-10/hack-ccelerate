import React from 'react'

const FormSU = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-slate-200">
        <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
            <form>
                <h2 className="text-blue-700 text-3xl font-semibold my-4">Register</h2>
                
                {/* full name */}
                <div id="fullName" class="flex flex-row">
                <div id="firstName" className="w-1/2 mr-1">
                            <label for="fname" className="text-sm">First Name</label>
                            <input type="text" name="" id="fname"
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
                </div>
                <div id="lastName" className="w-1/2 mr-1">
                        <label for="lname" className="text-sm">Last Name</label>
                        <input type="text" name="" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
                </div>
                </div>
                {/* email */}
                <label for="email" className="text-sm">Email</label>
                <input type="emial" name="" id="email" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>

                {/* password */}
                <label for="password" className="text-sm">Password</label>
                <input type="password" name="" id="password" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>

                {/* confirm pass */}
                <label for="confirmPassword" className="text-sm">Confirm Password</label>
                <input type="password" name="" id="confirmPassword" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
                
                {/* submit */}
                <input type="submit" name="" id="signUp" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"></input>
                

            </form>
        </div>
            
        </div>
        
    </div>
  )
}

export default FormSU