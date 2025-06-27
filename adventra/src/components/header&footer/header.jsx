
import CartIcon from './cartIcon';
import ChatIcon from './chatIcon';
import FlightIcon from './flightIcon';
import Logo from './logo';
import ProfileImage from './profileImage';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9f1f0] px-4 py-3">
      <div className="flex items-center gap-28">
        <div className="flex items-center gap-4 text-[#101918]">
          {/* Logo SVG */}
<Logo/>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link to="/home">
          <a href="#" className="text-sm font-medium text-[#101918]">Home</a>

          </Link>

          <a href="#" className="text-sm font-medium text-[#101918]">Tours</a>
          <Link to="/events">
                    <a href="#" className="text-sm font-medium text-[#101918]">Events</a>

          </Link>
          <Link to="/cities">
                    <a href="#" className="text-sm font-medium text-[#101918]">Cities</a>
          </Link>
          
          
          <a href="#" className="text-sm font-medium text-[#101918]">Guides</a>
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <SearchBar />
        <CartIcon/>

        <FlightIcon/>
        <ChatIcon/>
        <ProfileImage/>
      </div>
    </header>
  );
}

export default Header;