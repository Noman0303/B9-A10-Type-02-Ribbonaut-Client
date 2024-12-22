import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Navbar = () => {

    const{user, logOut} = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleLogOut = () => {
        logOut()
          .then(() => {
            console.log('User logged out successfully');
            toast.success('User logged out successfully!', { autoClose: 3000 });
          })
          .catch(error => {
            console.error(error);
            toast.error('Logout failed. Please try again.', { autoClose: 3000 });
          });
      };

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allCraftItems'>All Art & Craft Items</NavLink></li>
        <li><NavLink to='/addCraftItems'>Add Craft Items</NavLink></li>
        <li><NavLink to='/myCraftList'>My Art & Craft List</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>


    </>

    return (
        <div className="navbar bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-medium font-Playfair">Ribbonaut </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center space-x-4">
                        <span
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={user.photoURL}
                                className="rounded-full w-8 h-auto inline-block"
                                alt="User profile"
                            />
                            {isHovered && (

                                <span className="absolute right-8 md:right-10 lg:right-10 w-auto p-1 text-xs text-white bg-black rounded-md">
                                    {user.displayName}
                                </span>
                            )}
                        </span>

                        <button
                            className="btn btn-sm lg:btn-base lg:text-lg"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-sm lg:btn-base lg:text-lg">Log in</button>
                    </Link>
                )}

            </div>
        </div>
    )
}

export default Navbar