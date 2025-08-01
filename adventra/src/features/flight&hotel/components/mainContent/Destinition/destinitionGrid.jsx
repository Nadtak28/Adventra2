import DestinationCard from "./destinitionCard";

const destinations = [
  { name: "Paris", price: "$200/night", img: "paris" },
  { name: "New York", price: "$250/night", img: "newyork" },
  { name: "Tokyo", price: "$150/night", img: "tokyo" },
  { name: "Bali", price: "$100/night", img: "bali", highlight: true },
  { name: "Barcelona", price: "$180/night", img: "barcelona" },
  { name: "Cape Town", price: "$120/night", img: "capetown" },
];

const DestinationGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {destinations.map(dest => (
      <DestinationCard key={dest.name} {...dest} />
    ))}
  </div>
);
export default DestinationGrid;
