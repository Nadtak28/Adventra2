import IconDayMarker from './iconDayMaker';

function ItineraryDay({ dayNumber, title, description }) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-x-2">
      {/* Day Marker Column */}
      <div className="flex flex-col items-center gap-1 pt-3">
        <IconDayMarker day={dayNumber} />
      </div>

      {/* Content Column */}
      <div className="flex flex-1 flex-col py-3">
        <p className="text-[#101918] text-base font-medium leading-normal">{title}</p>
        <p className="text-[#578e85] text-base font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default ItineraryDay;