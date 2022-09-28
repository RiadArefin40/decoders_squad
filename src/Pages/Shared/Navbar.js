import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to="/home"><li><a>Home</a></li></Link>
      <Link to="/products"><li><a>Products</a></li></Link>
      <Link to="/blogs"><li><a>Blog</a></li></Link>
      </ul>
    </div>
   
    <Link to="/home"> <a className="btn btn-ghost normal-case text-xl "> 
    <img className='w-20 h-16' src="https://i.ibb.co/35bVNKm/Decoders-Squad-logo-1.png" alt="" />
    
    
     </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  font-bold text-lg  text-teal-700">
      <Link to="/home"><li><a>Home</a></li></Link>
      <Link to="/products"><li><a>Products</a></li></Link>
    
      <Link to="/blogs"><li><a>Blog</a></li></Link>
      <li><a>About Us</a></li>
  
     
    </ul>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal p-5 font-bold text-lg  text-teal-700">
      <Link to="/blog"><li>Login</li></Link>
    </ul>
  </div>
</div>
    );
};

export default Navbar;