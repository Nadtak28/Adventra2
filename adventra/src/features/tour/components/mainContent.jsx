import TourHero from './mainContent/TourHero/tourHero';
import TourStats from './mainContent/TourStats/tourStats';
import Itinerary from './mainContent/Itinerary/itinerary';
import DestinationsCarousel from './mainContent/DestinationCarousel/destinationsCarousel';
import ReviewsSection from '../../../components/ReviewSection/reviewSection';
import RelatedToursCarousel from './mainContent/RelatedTourCarousel/relatedToursCarousel';
import GuideSection from './mainContent/GuideSection/guideSection';
import AvailableDates from './mainContent/AvailableDates/availableDates';
import BookingCTA from './mainContent/BookingCTA/bookingCTA'; 

function MainContent() {
  return (
    <main className="layout-content-container flex flex-1 justify-center px-4 py-5 max-w-[960px] mx-auto">
      <div className="w-full">
        <TourHero />
        <TourStats />
        <Itinerary />
        <DestinationsCarousel />
        <ReviewsSection />
        <RelatedToursCarousel />
        <GuideSection />
        <AvailableDates />
        <BookingCTA /> {/* Add BookingCTA here */}
      </div>
    </main>
  );
}

export default MainContent;