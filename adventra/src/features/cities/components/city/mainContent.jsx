// src/pages/CityDetailPage/MainContent.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OneCityService } from "../../api/oneCityService";
import { CityEventsService } from "../../api/cityEventService";
import { CityGuidesService } from "../../api/cityGuideService";

import HeroSection from "./MainContent/HeroSection/heroSection";
import InfoSection from "./MainContent/InfoSection/infoSection";
import EventCard from "./MainContent/EventInTheCity/EventCard";
import GuideCard from "./MainContent/Guide/guideCard";

export default function MainContent() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    detail: city,
    loadingDetail,
    events = [],
    guides = [],
    loadingEvents,
    loadingGuides,
    errorDetail,
  } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(OneCityService(id));
    dispatch(CityEventsService(id));
    dispatch(CityGuidesService(id));
  }, [dispatch, id]);

  if (loadingDetail) return <div className="p-6 text-center">Loading city details...</div>;
  if (errorDetail) return <div className="p-6 text-center text-red-500">{errorDetail}</div>;
  if (!city) return <div className="p-6 text-center">No city found.</div>;

  return (
    <main className="layout-content-container flex flex-1 justify-center px-4 py-5 max-w-[960px] mx-auto">
      <div className="w-full">
        <HeroSection image={city.images[0]?.url} name={city.name} />
        <InfoSection title="About" content={city.description} />
        <InfoSection title="Country" content={city.country.name} />
        <InfoSection title="Language" content={city.language.name} />

        <h2 className="text-xl font-bold mt-6 px-4">Events</h2>
<div className="overflow-x-auto no-scrollbar">
  <div className="flex gap-4 px-4 py-2">
    {loadingEvents ? (
      <p>Loading events...</p>
    ) : (
      (Array.isArray(events) ? events : []).map((event, idx) => (
        <EventCard
          key={idx}
          image={event.image}
          title={event.name}
          description={event.description}
        />
      ))
    )}
  </div>
</div>


        <h2 className="text-xl font-bold mt-6 px-4">Guides</h2>
        <div className="flex overflow-x-auto gap-4 p-4">
          {loadingGuides ? (
            <p>Loading guides...</p>
          ) : (
            (Array.isArray(guides) ? guides : []).map((guide, idx) => (
              <GuideCard
                key={idx}
                image={guide.image}
                name={guide.name}
                role={guide.role}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
