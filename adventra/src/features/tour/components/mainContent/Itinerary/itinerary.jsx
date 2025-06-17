import ItineraryDay from './itineraryDay';

function Itinerary() {
  const days = [
    {
      dayNumber: 1,
      title: 'Arrival in Paris',
      description: 'Welcome to the City of Light! Check-in at hotel.',
    },
    {
      dayNumber: 2,
      title: 'Paris Highlights',
      description: 'Eiffel Tower, Louvre Museum, and Seine River cruise.',
    },
    {
      dayNumber: 3,
      title: 'Rome Exploration',
      description: 'Discover ancient wonders like Colosseum and Vatican Museums.',
    },
    {
      dayNumber: 4,
      title: 'Travel to Berlin',
      description: 'Scenic train ride through the German countryside.',
    },
    {
      dayNumber: 5,
      title: 'Berlin City Tour',
      description: 'Experience the vibrant capital and its rich history.',
    },
    {
      dayNumber: 6,
      title: 'Vienna Arrival',
      description: 'Arrive in Vienna and settle into your hotel.',
    },
    {
      dayNumber: 7,
      title: 'Vienna Highlights',
      description: 'Enjoy classical music and art in the heart of Europe.',
    },
    {
      dayNumber: 8,
      title: 'Prague Adventure',
      description: 'Explore the magical city of Prague and its historic sites.',
    },
    {
      dayNumber: 9,
      title: 'Departure from Prague',
      description: 'Farewell from the heart of Europe.',
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Itinerary</h2>
      {days.map((day) => (
        <ItineraryDay
          key={day.dayNumber}
          dayNumber={day.dayNumber}
          title={day.title}
          description={day.description}
        />
      ))}
    </section>
  );
}

export default Itinerary;