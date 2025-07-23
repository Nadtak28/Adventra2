import ProfileSection from "./mainContent/profileSection/profileSection";
// import EditProfileForm from './EditProfileForm';
import BookingTabs from "./mainContent/BookingState/bookingTabs";
import EmptyState from "./mainContent/BookingState/emptyState";
import SettingsSection from "./mainContent/settings/settingsSection";
import SettingsItem from "./mainContent/settings/settingsItem";
import PageTitle from "./mainContent/pageTitle/pageTitle";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutService } from "../api/logoutService";
import { tokenStore } from "../../../utils/dataStore";

export default function MainContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(LogoutService()).unwrap();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      tokenStore.clearToken(); // Clear token
      navigate("/"); // Navigate to homepage
    }
  };

  return (
    <main className="px-40 flex flex-1 justify-center py-5 bg-white">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Page Title */}
        <PageTitle />

        {/* Profile Section */}
        <ProfileSection />

        {/* Booking History */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Booking History
        </h3>
        <BookingTabs />
        <EmptyState />

        {/* Settings */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Settings
        </h3>
        <SettingsSection>
          <SettingsItem label="Language" value="English" />
          <SettingsItem label="Change Password" icon="ArrowRight" />
          <SettingsItem label="Edit Profile" icon="ArrowRight" />
          <SettingsItem
            label="Logout"
            icon="ArrowRight"
            className="hover:cursor-pointer"
            onClick={handleLogout} // Pass logout handler here
          />
        </SettingsSection>

        {/* Points */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Points
        </h3>
        <SettingsSection>
          <SettingsItem label="Points" value="1200" />
        </SettingsSection>
      </div>
    </main>
  );
}

{
  /* Personal Info Section */
}
{
  /* <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Personal Information</h3>
        <EditProfileForm /> */
}
