import { useSelector } from 'react-redux';
import Breadcrumbs from './Breadcrumb/breadCrumbs';
import EventDetails from './EventDetails/eventCard';
import GuideCard from './GuideInfo/guideCard';
import WhatIncluded from './WhatIncluded/whatIncluded';
import PriceSection from './PriceSection/priceSection';
import RelatedExperiences from './RelatedExperience/relatedExperience';
import ReviewsSection from '../../../../../components/ReviewSection/reviewSection';
import HeroSection from './HeroSection/heroSection';

function MainContent() {
const eventData = useSelector((state) => state.events.detail);

  if (!eventData) return <div className="text-center py-10 text-gray-600">Loading...</div>;

  return (
    <main className="layout-container flex h-full grow flex-col">
      <div className="layout-content-container flex flex-col max-w-[960px] mx-auto w-full">
        <Breadcrumbs city={eventData.city?.name} category={eventData.category?.name} />
        <HeroSection imageUrl={eventData.images?.[0]?.url} />
        <EventDetails event={eventData} />
        <GuideCard />
        <WhatIncluded included={["Bike rental", "Helmet", "Guided tour"]} />
        <PriceSection price={eventData.ticket_price} />
        <RelatedExperiences />
        <ReviewsSection />
      </div>
    </main>
  );
}

export default MainContent;
