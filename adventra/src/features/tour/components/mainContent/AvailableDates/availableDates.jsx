import DateItem from './dateItem';

function AvailableDates() {
  const dates = [
    "July 1, 2024",
    "July 15, 2024",
    "August 5, 2024",
    "August 19, 2024"
  ];

  return (
    <section className="mt-10 px-4">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Available Dates</h2>
      <p className="text-[#101918] text-base font-normal leading-normal pb-3 pt-1">Available dates for the Best of Europe Tour in 2024:</p>

      <div className="flex flex-col gap-2">
        {dates.map((date, index) => (
          <DateItem key={index} date={date} />
        ))}
      </div>
    </section>
  );
}

export default AvailableDates;