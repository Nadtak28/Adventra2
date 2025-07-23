import MainContent from "../features/home/components/mainContent";
import HomeContextProvider from "../features/home/context/homeContext/homeContextProvider";

function Home() {
  return (
    <HomeContextProvider>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-sans">
        <MainContent />
      </div>
    </HomeContextProvider>
  );
}

export default Home;
