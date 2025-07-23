import CartIcon from "./cartIcon";
import ChatIcon from "./chatIcon";
import FlightIcon from "./flightIcon";
import Logo from "./logo";
import ProfileImage from "./profileImage";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9f1f0] px-4 py-3">
      <div className="flex items-center gap-28">
        <div className="flex items-center gap-4 text-[#101918]">
          {/* Logo SVG */}
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-medium text-[#101918]" to="/home">
            Home
          </Link>
          <Link className="text-sm font-medium text-[#101918]">Tours</Link>
          <Link className="text-sm font-medium text-[#101918]" to="/events">
            Events
          </Link>
          <Link className="text-sm font-medium text-[#101918]" to="/cities">
            Cities
          </Link>

          <Link className="text-sm font-medium text-[#101918]" to="/guides">
            Guides
          </Link>
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <SearchBar />
        <CartIcon />

        <FlightIcon />
        <ChatIcon />
        <ProfileImage />
      </div>
    </header>
  );
}

export default Header;
