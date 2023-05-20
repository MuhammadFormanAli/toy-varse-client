import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../useTitle';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const { signIn, googleSignIn } = useContext(AuthContext);
    useTitle("Login")

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'




    // login with password and email
    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        // password validation
        if (password.length < 6) {
            setError("Password should be at least 6 character")
            return
        }
         // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // google login handler
     const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then(result => {
                // console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
    }

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };



    return (




        <div className=" flex items-center justify-center my-4">
            <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" name='email' id="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Your Email' required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder='Enter Your Password'
                                id='password'
                                name='password'
                                required
                            />
                            <button
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? <p>Hide</p> : <p>Show</p>}
                            </button>
                        </div>
                    </div>

                    {/* showing error message */}
                    <small className='text-red-600'>{error}</small>

                    <div className="flex items-center justify-between">
                        <input className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="LogIn" />
                        <p>Do not have an account?<Link to="/register" className="text-blue-500 hover:text-blue-600 text-sm font-semibold">Register</Link></p>
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-info w-full capitalize'>Sign In With Google</button>
            </div>
        </div>

    );
};

export default Login;
