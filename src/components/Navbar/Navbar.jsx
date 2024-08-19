import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-transparent relative z-50 rounded-t-md">
      <div className="flex justify-between items-center h-16 px-4 lg:px-20">
        <div className="text-3xl font-bold text-white flex gap-1">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full md:mt-0 flex-shrink-0" />
          <h1 className="text-xl md:text-3xl font-bold text-white">RENTAL AGREEMENT</h1>
        </div>
        <div className="hidden lg:flex space-x-8  text-white text-lg">
          <NavLink to='/' className="nav-link" >
            <span className="transition font-semibold hover:border-white hover:border-b-2 cursor-pointer">
              Home
            </span>
          </NavLink>
          <NavLink to="/about" className='nav-link' >
            <span className="transition font-semibold hover:border-white hover:border-b-2 cursor-pointer">
              About
            </span>
          </NavLink>
          <NavLink to='/service' className="nav-link">
            <span className="transition font-semibold hover:border-white hover:border-b-2 cursor-pointer">
              Services
            </span>
          </NavLink>
          <NavLink to='/contact' className="nav-link">
            <span className="transition font-semibold hover:border-white hover:border-b-2 cursor-pointer">
              Contact Us
            </span>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button onClick={handleClick} className="text-white">
            {click ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>
      {click && (
        <div className="lg:hidden  left-0 right-0 bottom-0 bg-transparent overflow-y-auto">
          <ul className="text-center text-xl p-8">
            <NavLink to='/' className="nav-link">
              <li
                className="my-4 py-4 border-b-2 border-slate-800 hover:text-white font-semibold cursor-pointer"
                onClick={handleClick}
              >
                Home
              </li>
            </NavLink>
            <NavLink to='/about' className="nav-link">
              <li
                className="my-4 py-4 border-b-2 border-slate-800 hover:text-white font-semibold cursor-pointer"
                onClick={handleClick}
              >
                About
              </li>
            </NavLink>
            <NavLink to='/service' className="nav-link">
              <li
                className="my-4 py-4 border-b-2 border-slate-800 hover:text-white font-semibold cursor-pointer"
                onClick={handleClick}
              >
                Services
              </li>
            </NavLink>
            <NavLink to='/contact' className="nav-link">
              <li
                className="my-4 py-4 border-b-2 border-slate-800 hover:text-white font-semibold cursor-pointer"
                onClick={handleClick}
              >
                Contact Us
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
