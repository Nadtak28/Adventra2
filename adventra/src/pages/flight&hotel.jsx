import Footer from '../components/header&footer/footer';
import MainContent from '../features/flight&hotel/components/mainContent';

function FlightandHotel() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfb] group/design-root overflow-x-hidden font-sans">
      <MainContent />
      <Footer />
    </div>
  );
}

export default FlightandHotel;