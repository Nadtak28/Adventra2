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

  if (loadingDetail)
    return <div className="p-6 text-center">Loading city details...</div>;
  if (errorDetail)
    return <div className="p-6 text-center text-red-500">{errorDetail}</div>;
  if (!city) return <div className="p-6 text-center">No city found.</div>;

  return (
    <main className="bg-white flex flex-col flex-1 px-4 sm:px-6 md:px-8 py-6 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col gap-6 w-full">
        {/* Hero */}
        <HeroSection image={city.images[0]?.url} name={city.name} />

        {/* Info */}
        <InfoSection title="About" content={city.description} />
        <InfoSection title="Country" content={city.country?.name} />
        <InfoSection title="Language" content={city.language?.name} />

        {/* Events Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold px-4 md:px-6">Events</h2>
          <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x touch-pan-x px-4 md:px-6">
            <div className="flex gap-4 py-2 w-max">
              {loadingEvents ? (
                <p>Loading events...</p>
              ) : (
                (Array.isArray(events) ? events : []).map((event, idx) => (
                  <div key={idx} className="snap-start shrink-0">
                    <EventCard
                      image={event.image}
                      title={event.name}
                      description={event.description}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold px-4 md:px-6">Guides</h2>
          <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x touch-pan-x px-4 md:px-6">
            <div className="flex gap-4 py-2 w-max">
              {loadingGuides ? (
                <p>Loading guides...</p>
              ) : (
                (Array.isArray(guides) ? guides : []).map((guide, idx) => (
                  <div key={idx} className="snap-start shrink-0">
                    <GuideCard
                      image={guide.image}
                      name={guide.name}
                      role={guide.role}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
