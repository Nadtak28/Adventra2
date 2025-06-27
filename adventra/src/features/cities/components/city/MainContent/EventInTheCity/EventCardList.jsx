import { useSelector } from "react-redux";
import EventCard from "./EventCard";

export default function EventCardList() {
  const { events, loadingEvents } = useSelector((state) => state.cities);

  if (loadingEvents) {
    return <div className="p-4">Loading events...</div>;
  }

  if (!events || events.length === 0) {
    return <div className="p-4 text-gray-500">No events found.</div>;
  }

  return (
    <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
