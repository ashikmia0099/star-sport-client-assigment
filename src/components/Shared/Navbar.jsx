import React, { useContext } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

// import TheamContoler from './TheamContoler';


import logo from '../../assets/images/logo.png'
import { AuthContext } from '../Context/AuthProvider';
import TheamContoler from '../Pages/TheamContoler/TheamContoler';

const Navbar = () => {



    const navigate = useNavigate()
    const { SignUpUser, updateUserProfile, SignOutUser, setError, SignInUser, signInwithGoogle, user, setUser } = useContext(AuthContext);

    const links = <>



        {
            user && user?.email ? (
                <div className='lg:flex'>

                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Home</p></li>
                    </NavLink>


                    <NavLink to='/sportcomponent' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Sport Component</p></li>
                    </NavLink>


                    <NavLink to='/addComponent' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Add Component</p></li>
                    </NavLink>

                    <NavLink to='/mycomponent' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>My Component</p></li>
                    </NavLink>


                 




                </div>
            ) : (
                <div className='lg:flex'>

                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Home</p></li>
                    </NavLink>
                    <NavLink to='/sportcomponent' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Sport Component</p></li>
                    </NavLink>
                    <NavLink to='/aboutus' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>About Us</p></li>
                    </NavLink>
                    <NavLink to='/contractus' className={({ isActive }) =>
                        isActive ? " border-b-4 border-[#A4DBC1] " : ""
                    }>
                        <li><p className='text-lg font-semibold'>Contract Us</p></li>
                    </NavLink>

                   






                </div>
            )
        }




    </>

    // handle Logout

    const handleLogout = () => {
        SignOutUser()
            .then(() => {
                navigate("/signIn")
            })
            .catch((error) => {
                console.log('Error', error)
                // return ('Error', error)
            })
    }





    return (
        <div className="navbar grid grid-cols-10 max-w-7xl  fixed top-0 z-40 lg:backdrop-blur-xl bg-white/50 ">
            <div className="col-span-1 navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link ><img src={logo} alt="Logo" className='mx-auto' /></Link>

            </div>
            <div className="col-span-7 items-center navbar-center hidden lg:block ">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
         
            <div className='col-span-2 lg:flex'>
                <TheamContoler></TheamContoler>
                {user && user.email ? (
                    <div className="navbar-end space-x-4 flex items-center">
                        <div className="dropdown dropdown-hover">
                            <div>
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="User Profile"
                                        className="h-8 w-8 rounded-full"
                                    />
                                ) : (
                                    <CgProfile tabIndex={0} className="h-8 w-8" />
                                )}
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 shadow left-0">
                                <li>
                                    <h3>
                                        <span className="font-bold">Name:</span> {user.displayName}
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <span className="font-bold">Email:</span> {user.email}
                                    </h3>
                                </li>
                            </ul>
                        </div>
                        <NavLink onClick={handleLogout}>
                            <a className="text-md font-semibold">Logout</a>
                        </NavLink>
                    </div>
                ) : (


                    <div className="navbar-end space-x-4 flex items-end justify-end">
                    <NavLink className=' flex'>
                        <Link to={'/signIn'}> <button className='btn rounded-none rounded-l-full min-h-1 h-10'><a className=" font-semibold">Sign In</a></button></Link>
                        <Link to={'/signUp'}><button className='btn rounded-none rounded-r-full min-h-1 h-10'><a className=" font-semibold">Sign Up</a></button></Link>

                    </NavLink>
                    
                </div>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;