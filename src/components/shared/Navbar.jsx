import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../lib/context"; // ✅ adjust path if needed

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, navigate , setShowUserLogin , setsearchQuery , searchQuery} = useAppContext();
  
  
  const logout = async()=>{
    setUser(null);
    navigate('/')
  }

  

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 border-b border-gray-200 bg-white text-gray-800 relative">
      <Link to="/" className="text-2xl font-bold text-green-600">
        DadiHills
      </Link>

      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-green-600 transition-colors">Products</Link>
        <Link to="/contact" className="hover:text-green-600 transition-colors">Contact</Link>

        <div className="relative cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#4A5568"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* ✅ Desktop Login button triggers modal */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowUserLogin(true)}
            className="px-6 py-2 text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition-all rounded-full"
          >
            Login
          </button>
          <button className="px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition-all rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* ✅ Mobile menu toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg width="24" height="18" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="2" rx="1" fill="#4A5568" />
          <rect y="6" width="21" height="2" rx="1" fill="#4A5568" />
          <rect y="12" width="21" height="2" rx="1" fill="#4A5568" />
        </svg>
      </button>

      {/* ✅ Mobile dropdown menu */}
      {open && (
        <div className="absolute top-[68px] left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-4 px-6 text-gray-800 sm:hidden">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-green-600 transition-colors">Contact</Link>

          {/* ✅ Mobile Login button triggers modal */}
          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => {
                setShowUserLogin(true);
                setOpen(false); // optionally close mobile menu too
              }}
              className="px-6 py-2 text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition-all rounded-full text-center"
            >
              Login
            </button>
            <button className="px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition-all rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
