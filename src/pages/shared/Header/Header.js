import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Log Out!");
            })
            .catch(error => {
                console.log(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/my-reviews">My Reviews</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                    </div>
                    <Link className="lg:text-4xl text-yellow-500 font-bold font-serif sm-w-full">Trainer Review</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/addService">Add Service</Link></li>
                        <li><Link to="/my-reviews">My Reviews</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end lg:mr-20 font-bold">

                    {
                        user?.email ?
                            <>
                                <button onClick={handleLogOut} className="p-1 hover:text-red-400">Log Out</button>
                                <p className='text-green-400 pl-3 hidden lg:block'>{ user?.email}</p>
                            </>
                            :
                            <>
                            <Link to="/sign-up" className="p-1 hover:text-green-400">Sign Up</Link>
                             <Link to="/log-in" className="p-1 hover:text-green-400">LogIn</Link>
                            </>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Header;