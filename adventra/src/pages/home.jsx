import Footer from '../components/header&footer/footer';
import MainContent from '../features/home/components/mainContent';

function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfb] group/design-root overflow-x-hidden font-sans">
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;