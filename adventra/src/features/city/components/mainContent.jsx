import InfoSection from "./MainContent/InfoSection/infoSection";
import HeroSection from "./MainContent/HeroSection/heroSection";
import EventCardList from "./MainContent/EventInTheCity/EventCardList";
import GuideCardList from "./MainContent/Guide/guideCardList";
function MainContent() {
  return (
<main className="layout-content-container flex flex-1 justify-center px-4 py-5 max-w-[960px] mx-auto">
      <div className="w-full">
       <HeroSection/>
<InfoSection title="About" content="San franceisco
 enflkmflkme;wf;le,fldnwslkkkkkkkk
 " />
<InfoSection title="Country" content="united states" />
<InfoSection title="Language" content="English" />
<EventCardList/>
       <GuideCardList/>
      </div>
    </main>
  );
}

export default MainContent;