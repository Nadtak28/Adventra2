import { useState } from "react";
import { useLatestTours } from "../context/latestTourContext";
import { useTopEvents } from "../context/topEventsContext";
import { useFeaturedCities } from "../context/featuredCitiesContext";
import { useTopRatedGuides } from "../context/topRatedGuidesContext";
import { useEventsByCategory } from "../context/eventsByCategoryContext";

import SearchBar from "./mainContent/searchBar";
import CardList from "./mainContent/cardList";
import TabNavigation from "./mainContent/TabNavigation";
import TopRatedGuideList from "./mainContent/topRatedGuideList";

export default function MainContent() {
  const latestTours = useLatestTours();
  const topEvents = useTopEvents();
  const featuredCities = useFeaturedCities();
  const topRatedGuides = useTopRatedGuides();
  const eventsByCategory = useEventsByCategory();

  // Selected tab state
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cardType, setCardType] = useState(["event", "city", "tour"]);
  // Compute filtered events for the CardList under tabs
  let filteredEvents = [];

  if (selectedCategory === "All") {
    filteredEvents = eventsByCategory.flatMap((cat) =>
      cat.events.map((event) => ({
        id: event.id,
        title: event.name,
        description: event.description,
        image: event.images?.[0]?.url || "/default-event.jpg",
      }))
    );
  } else {
    const categoryObj = eventsByCategory.find(
      (cat) => cat.name === selectedCategory
    );
    filteredEvents = categoryObj
      ? categoryObj.events.map((event) => ({
          id: event.id,
          title: event.name,
          description: event.description,
          image: event.images?.[0]?.url || "/default-event.jpg",
        }))
      : [];
  }

  // Prepare tabs: "All" + category names
  const tabs = ["All", ...eventsByCategory.map((cat) => cat.name)];
  console.log("latestTours////////////////////", latestTours);
  console.log("topEvents////////////////////", topEvents);
  console.log("featuredCities//////////////", featuredCities);
  console.log("filteredEvents//////////////", filteredEvents);
  console.log("topRatedGuides//////////////", topRatedGuides);

  return (
    <main className="bg-white  px-4 sm:px-6 md:px-10 lg:px-20 py-5 flex justify-center">
      <div className="w-full max-w-7xl">
        <SearchBar placeholder="Search for tours, events, and more" />

        <CardList
          title="Latest Group Tours"
          cardType={cardType[2]}
          items={latestTours.map((trip) => ({
            title: trip.name,
            description: trip.description,
            image: trip.images?.[0]?.url || "/default-event.jpg",
          }))}
          isScrollable
        />

        <CardList
          cardType={cardType[0]}
          title="Top-Rated Events"
          items={topEvents.map((trip) => ({
            ...trip,
            title: trip.name,
            description: trip.description,
            image: trip.images?.[0] || "/default-event.jpg",
          }))}
          isScrollable
        />

        <h2 className="text-[#101918] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
          Events by Type
        </h2>

        <TabNavigation
          categories={tabs}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          isScrollable
        />

        <CardList
          cardType={cardType[0]}
          title={selectedCategory === "All" ? "All Events" : selectedCategory}
          items={filteredEvents.map((event) => ({
            ...event,
            title: event.title,
            description: event.description,
            image: event.image || "/default-event.jpg",
          }))}
          isScrollable
        />

        <CardList
          cardType={cardType[1]}
          title="Cities with Most Events"
          items={featuredCities.map((city) => ({
            ...city,
            title: city.name,
            description: city.description,
            image: city.images?.[0]?.url || "/default-event.jpg",
          }))}
          isScrollable
        />

        <h2 className="text-[#101918] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
          Top-Rated Guides
        </h2>

        <TopRatedGuideList guides={topRatedGuides} />
      </div>
    </main>
  );
}
