import Footer from '../components/header&footer/footer';
import MainContent from '../features/home/components/mainContent';
import HomeContextProvider from '../features/home/context/homeContext/homeContextProvider';

function Home() {
  return (
    <HomeContextProvider>
      <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfb] group/design-root overflow-x-hidden font-sans">
        <MainContent />
        <Footer />
      </div>
    </HomeContextProvider>
  );
}

export default Home;
