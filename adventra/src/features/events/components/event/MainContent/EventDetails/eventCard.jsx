import EventInfoItem from "./eventInfoItem";
function EventCard({ event }) {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h2 className="text-[#0e1a18] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
        {event.name}
      </h2>
      <p className="text-[#0e1a18] text-base font-normal leading-normal pb-3 pt-1 px-4">
        {event.description}
      </p>
      <EventInfoItem label="City" value={event.city.name} />
      <EventInfoItem label="Category" value={event.category.name} />
      <EventInfoItem label="Rating" value={`${event.rate} (${event.reviewer_count} reviews)`} arrow={false} />
    </div>
  );
}

export default EventCard;
