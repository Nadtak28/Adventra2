import GuideProfile from '../components/mainContent/GuideProfile/guideProfile';
import BookingSection from '../components/mainContent/BookingSection/bookingSection';
import SimilarGuides from '../components/mainContent/SimilarGuides/similarGuides';

const MainContent = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <GuideProfile />
    
        <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Book a city tour with Ava
        </h2>

        <BookingSection />


        <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Similar guides
        </h2>

        <SimilarGuides />
      </div>
    </div>
  );
};

export default MainContent;