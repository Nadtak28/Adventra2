import TourTitle from './eventTitle';
import TourDescription from './eventDescription';
import TourInfoItem from './eventInfoItem';

function EventCard() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <TourTitle />
      <TourDescription />
      <TourInfoItem value="San Francisco" />
      <TourInfoItem value="Bike Tour" />
      <TourInfoItem value="4.8 (120 reviews)" />
    </div>
  );
}

export default EventCard;