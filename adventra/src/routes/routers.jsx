import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import User from "../pages/user";
import Header from "../components/Layout/header";
import FlightandHotel from "../pages/flight&hotel";
import Chat from "../pages/chat";
import Cities from "../pages/cities";
import Auth from "../pages/auth";
import Events from "../pages/events,";
import EventMainContent from "../features/events/components/event/MainContent/mainContent";
import Guides from "../pages/guides";
import Guide from "../pages/guide";
import City from "../pages/city";
import Footer from "../components/Layout/footer";
// Inside your App component

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

export default function Routers() {
  return (
    <>
      <Routes>
        {/* Guest-only route */}
        <Route
          path="/"
          element={
            <GuestRoute>
              <Auth />
            </GuestRoute>
          }
        />

        {/* All authenticated (protected) routes */}
        <Route
          element={
            <ProtectedRoute>
              <WebsiteLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<Guide />} />
          <Route path="/cities/:id" element={<City />} />
          <Route path="/events/:id" element={<EventMainContent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/flight&hotel" element={<FlightandHotel />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

function WebsiteLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
