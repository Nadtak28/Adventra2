import Breadcrumbs from './MainContent/Breadcrumb/breadCrumbs';
import EventDetails from './MainContent/EventDetails/eventCard';
import GuideCard from './MainContent/GuideInfo/guideCard';
import WhatIncluded from './MainContent/WhatIncluded/whatIncluded';
import PriceSection from './MainContent/PriceSection/priceSection';
import RelatedExperiences from './MainContent/RelatedExperience/relatedExperience';
import ReviewsSection from '../../../components/ReviewSection/reviewSection';
import HeroSection from './MainContent/HeroSection/heroSection';


function MainContent() {
  return (
    <main className="layout-container flex h-full grow flex-col">
      <div className="layout-content-container flex flex-col max-w-[960px] mx-auto w-full">
        <Breadcrumbs />
        <HeroSection/>
        <EventDetails />
        <GuideCard />
        <WhatIncluded />
        <PriceSection />
        <RelatedExperiences />
        <ReviewsSection />
      </div>
    </main>
  );
}
export default MainContent;