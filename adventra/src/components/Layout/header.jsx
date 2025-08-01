import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./cartIcon";
import ChatIcon from "./chatIcon";
import FlightIcon from "./flightIcon";
import Logo from "./logo";
import ProfileImage from "./profileImage";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between border-b border-[#e9f1f0] px-3 py-2 gap-2 relative z-50">
      {/* Left side: Logo */}
      <div className="flex items-center gap-3 flex-shrink-0 max-w-[120px]">
        <Logo />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden pl-32 md:flex items-center gap-6 md:gap-10 text-[#101918]">
        <Link className="text-sm font-medium" to="/home">
          Home
        </Link>
        <Link className="text-sm font-medium">Tours</Link>
        <Link className="text-sm font-medium" to="/events">
          Events
        </Link>
        <Link className="text-sm font-medium" to="/cities">
          Cities
        </Link>
        <Link className="text-sm font-medium" to="/guides">
          Guides
        </Link>
      </nav>

      {/* Right side: icons */}
      <div className="flex items-center ml-4 gap-2 sm:ml-2">
        <CartIcon />
        <FlightIcon className="hidden xs:inline" />
        <ChatIcon className="hidden sm:inline" />
        <ProfileImage />
        {/* Hamburger */}
        <button
          className="md:hidden ml-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-[#101918]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-40">
          <div className="flex flex-col p-4 gap-4 text-[#101918]">
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link onClick={() => setMenuOpen(false)}>Tours</Link>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <Link to="/cities" onClick={() => setMenuOpen(false)}>
              Cities
            </Link>
            <Link to="/guides" onClick={() => setMenuOpen(false)}>
              Guides
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
