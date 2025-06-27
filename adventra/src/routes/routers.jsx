import { Route,Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import User from "../pages/user";
import Header from "../components/header&footer/header";
import FlightandHotel from "../pages/flight&hotel";
import Chat from "../pages/chat";
import Cities from "../pages/cities";
import { useLocation } from "react-router-dom";
import Auth from "../pages/auth";
import Events from "../pages/events,";
import MainContent from "../features/cities/components/city/mainContent";
import EventMainContent from "../features/events/components/event/MainContent/mainContent";
// Inside your App component

export default function Routers(){
const location = useLocation();
const isAuthPage = location.pathname === "/";

    return(
 <>
    {!isAuthPage && <Header />}
    <Routes>
       <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/events" element={<Events />} />
            <Route path="/cities/:id" element={<MainContent />} />
            <Route path="/events/:slug" element={<EventMainContent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/flight&hotel" element={<FlightandHotel />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </>
    );
}