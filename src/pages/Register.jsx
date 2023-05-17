import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error,setError]=useState('')

// this function for register a user
    const handleRegister = (event) => {
        event.preventDefault()
        
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length <6){
            setError("Password should be at least 6 character")
            return
          }

          console.log(name, photo, email, password)
    }




    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className=" flex items-center justify-center my-4">
            <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Register</h2>

                <form onSubmit={handleRegister}>
                    
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="test" name='name' id="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Your Name' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                        <input type="text" name='photo'  id="photo" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Photo URL' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email"  id="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Your Email' required />
                    </div>



                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder='Enter Your Password'
                                id='password'
                                required
                            />
                            <p
                                className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? <p>Hide</p> : <p>Show</p>}
                            </p>
                        </div>
                    </div>

                    {/* showing error message */}
                    <small className='text-red-600'>{error}</small>


                    <div className="flex items-center justify-between">
                        <input className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Register" />
                        <p>Already have an account?<Link to="/login" className="text-blue-500 hover:text-blue-600 text-sm font-semibold">LogIn</Link></p>
                    </div>

                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-info w-full capitalize'>Register With Google</button>
                
            </div>
        </div>
        </>
    );
};

export default Register;