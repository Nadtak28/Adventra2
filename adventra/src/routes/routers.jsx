import { Route,Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import User from "../pages/user";
import Header from "../components/header&footer/header";
import FlightandHotel from "../pages/flight&hotel";
import Chat from "../pages/chat";
import SignUp from "../pages/signUp";
import { useLocation } from "react-router-dom";

// Inside your App component

export default function Routers(){
const location = useLocation();
const isAuthPage = location.pathname === "/";

    return(
 <>
    {!isAuthPage && <Header />}
    <Routes>
       <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/flight&hotel" element={<FlightandHotel />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </>
    );
}