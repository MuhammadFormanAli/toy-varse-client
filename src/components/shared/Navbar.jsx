import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ActiveLink from './ActiveLink';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLink = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            {
                            user ? <><li><ActiveLink to="/mytoys">My Toys</ActiveLink></li>
                            <li><ActiveLink to="/addtoy">Add Toy</ActiveLink></li></> : <li><ActiveLink to="/register">Register</ActiveLink></li>
                        }

                        </ul>
                    </div>
                    <div>
                        <Link to='/'><img className='w-52 btn' src="/logo.png" alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}

                        {
                            user ? <><li><ActiveLink to="/mytoys">My Toys</ActiveLink></li>
                            <li><ActiveLink to="/addtoy">Add Toy</ActiveLink></li></> : <li><ActiveLink to="/register">Register</ActiveLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            // user image section
                            <div className='flex align-middle'>
                                <div data-tip={user?.displayName} className='tooltip tooltip-left mr-1'>
                                    <label className=" btn btn-ghost btn-circle avatar">
                                        <div className=" w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                </div>
                                <button onClick={logOut} className='btn capitalize'>Log Out</button>
                            </div>
                            : <Link to="/login" className='btn capitalize'>Log In</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;