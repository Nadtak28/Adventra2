import Footer from '../components/header&footer/footer';
import MainContent from '../features/event/components/mainContent';

function Event() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfb] group/design-root overflow-x-hidden font-sans">
      <MainContent />
      <Footer />
    </div>
  );
}

export default Event;