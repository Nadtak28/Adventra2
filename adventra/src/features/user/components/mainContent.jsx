import ProfileSection from './mainContent/profileSection/profileSection';
// import EditProfileForm from './EditProfileForm';
import BookingTabs from './mainContent/BookingState/bookingTabs';
import EmptyState from './mainContent/BookingState/emptyState';
import SettingsSection from './mainContent/settings/settingsSection';
import SettingsItem from './mainContent/settings/settingsItem';
import PageTitle from './mainContent/pageTitle/pageTitle';

export default function MainContent() {
  return (
    <main className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Page Title */}
       <PageTitle/>

        {/* User Profile */}
        <ProfileSection />

        {/* Booking History */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Booking History</h3>
        <BookingTabs />
        <EmptyState />

        {/* Settings */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Settings</h3>
        <SettingsSection>
          <SettingsItem label="Language" value="English" />
          <SettingsItem label="Dark Mode" isToggle />
          <SettingsItem label="Logout" icon="ArrowRight" />
          <SettingsItem label="Change Password" icon="ArrowRight" />
          <SettingsItem label="Edit Profile" icon="ArrowRight"/>
        </SettingsSection>

        {/* Points */}
        <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Points</h3>
        <SettingsSection>
          <SettingsItem label="Points" value="1200" />
        </SettingsSection>
      </div>
    </main>
  );
}


  {/* Personal Info Section */}
        {/* <h3 className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Personal Information</h3>
        <EditProfileForm /> */}