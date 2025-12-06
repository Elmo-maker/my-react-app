import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // cek token di localStorage saat Navbar mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);

    // update login state saat login sukses
    const handleLogin = () => setIsLoggedIn(true);
    window.addEventListener("login-success", handleLogin);
    return () => window.removeEventListener("login-success", handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 border-b border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold text-white">
              Festify<span className="text-indigo-400">™</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-medium items-center">
            <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/events" className="hover:text-indigo-400 transition">Events</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-400 transition">FAQ</Link></li>

            <button className="text-gray-400 hover:text-white transition p-2">
              <Search size={20} />
            </button>

            {/* Login/Logout */}
            <li className="ml-4">
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <button onClick={() => window.dispatchEvent(new Event("open-login"))}>Login</button>
              )}
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-400 hover:text-white transition p-2 mr-2">
              <Search size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-indigo-400 p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Dropdown Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 shadow-lg border-t border-gray-800">
            <ul className="flex flex-col space-y-3 p-4 text-gray-300 font-medium">
              <li><Link to="/" className="block py-2 hover:text-indigo-400 transition" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/events" className="block py-2 hover:text-indigo-400 transition" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
              <li><Link to="/about" className="block py-2 hover:text-indigo-400 transition" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" className="block py-2 hover:text-indigo-400 transition" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
              <li><Link to="/faq" className="block py-2 hover:text-indigo-400 transition" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
              <li className="pt-2">
                <button onClick={() => window.dispatchEvent(new Event("open-login"))}>Login</button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal Login */}
      <LoginModal />
    </>
  );
}
