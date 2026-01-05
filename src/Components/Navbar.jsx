import React, { useState, useEffect, useContext } from "react";
import { ShoppingBag, User, Menu, X, MessageCircle, LogIn } from "lucide-react";
import { Link } from "react-router"; // Ensure this matches your router version (react-router-dom usually)
import ChatWidget from "./ChatWidget"; // Import the new component
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  // New state for Chat Modal
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-4 text-amber-900"
            : "bg-transparent py-6 text-amber-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            বাংলার<span className="text-orange-600">ঐতিহ্য</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-orange-600 transition">
              Home
            </Link>
            <Link
              to="/collection/nakshi-kantha"
              className="hover:text-orange-600 transition"
            >
              Nakshi Kantha
            </Link>
            <Link
              to="/collection/pottery"
              className="hover:text-orange-600 transition"
            >
              Pottery
            </Link>
            <Link to="/about" className="hover:text-orange-600 transition">
              Our Story
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* --- NEW CHAT BUTTON START --- */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="hidden md:flex items-center gap-2 bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition shadow-lg"
            >
              <MessageCircle size={18} />
              <span>Chat with us</span>
            </button>
            {/* --- NEW CHAT BUTTON END --- */}
            {user ? (
              <Link
                to="/profile"
                className="cursor-pointer hover:text-orange-600 transition"
                title="Profile"
              >
                <User size={22} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="cursor-pointer hover:text-orange-600 transition"
                title="Login"
              >
                <LogIn size={22} />
              </Link>
            )}

            <div className="relative cursor-pointer hover:text-orange-600 transition">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 text-amber-900">
            {/* Mobile Chat Button */}
            <button
              onClick={() => {
                setIsChatOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 font-semibold text-orange-600"
            >
              <MessageCircle size={18} /> Chat with AI Assistant
            </button>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 font-semibold text-orange-600"
            >
              <User size={18} /> Login / Register
            </Link>
            <Link
              to="/collection/nakshi-kantha"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nakshi Kantha
            </Link>
            <Link
              to="/collection/pottery"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terracotta
            </Link>
            <Link
              to="/collection/jute"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jute Crafts
            </Link>
          </div>
        )}
      </nav>

      {/* --- RENDER CHAT WIDGET HERE --- */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Navbar;
