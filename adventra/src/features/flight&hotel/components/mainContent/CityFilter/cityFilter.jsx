const CityFilters = () => {
  const cities = ["Paris", "New York", "Tokyo", "Bali", "Barcelona", "Cape Town"];
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {cities.map(city => (
        <span key={city} className="px-4 py-2 bg-gray-100 rounded-full">
          {city}
        </span>
      ))}
    </div>
  );
};
export default CityFilters;