// Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react";
import { useAuth } from '@clerk/clerk-react';
import "../App.css";

const Header = () => {
  const { userId } = useAuth();

  return (
    <nav className="bg-gradient animated-gradient py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to='/' className='text-lg font-bold text-white uppercase transition duration-300 transform hover:scale-105'>
          A<sup>2</sup> Code Editor
        </Link>

        <div className='flex items-center text-white'>
          {!userId && (
            <>
              <NavLink to='/signin' className='text-gray-300 hover:text-white mx-4 transition duration-300 transform hover:scale-105'>
                Sign In
              </NavLink>
              <NavLink to='/signup' className='text-gray-300 hover:text-white mx-4 transition duration-300 transform hover:scale-105'>
                Sign Up
              </NavLink>
            </>
          )}
          {userId && (
            <>
              <NavLink to='/' className='text-gray-300 hover:text-white mx-4 transition duration-300 transform hover:scale-105'>
                Profile
              </NavLink>
              <UserButton afterSignOutUrl='/' />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
