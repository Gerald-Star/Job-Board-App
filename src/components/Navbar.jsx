import React from 'react';
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px:8'>
        <NavLink>
          <img className='h-10 w-auto' src={logo} alt='logo' />
        </NavLink>


        <div className='flex space-x-2'>
          <NavLink to='/' className={linkClass}>
            Home
          </NavLink>

          <NavLink to='/jobs' className={linkClass}>
            Jobs
          </NavLink>

          <NavLink to='/add-job' className={linkClass}>
            Add Job
          </NavLink>

        </div>

        
     </div>
      
    </nav>
  );
}

export default Navbar;
