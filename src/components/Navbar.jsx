import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"; // import komponen login modal

export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-7"
          />
          <span className="text-xl font-semibold text-gray-800">FESTIFY</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li>
          <li>
            {/* Login Modal */}
            <LoginModal />
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block">
          <form className="relative w-64">
            <input
              type="search"
              placeholder="Search"
              className="block w-full p-2 pl-9 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <svg
              className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="m21 21-3.5-3.5M17 10a7 
                7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </form>
        </div>
      </div>
    </nav>
  );
}
