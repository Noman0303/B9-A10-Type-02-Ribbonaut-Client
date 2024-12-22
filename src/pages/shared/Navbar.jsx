import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

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
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar