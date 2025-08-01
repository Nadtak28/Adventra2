import { useSelector } from "react-redux";
import GuideCard from "./guideCard";

export default function GuideCardList() {
  const { guides, loadingGuides } = useSelector((state) => state.cities);

  if (loadingGuides) {
    return <div className="p-4">Loading guides...</div>;
  }

  if (!guides || guides.length === 0) {
    return <div className="p-4 text-gray-500">No guides found.</div>;
  }

  return (
    <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch gap-4 px-4 py-2">
        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            image={guide.image}
            name={guide.name}
            role={guide.role}
          />
        ))}
      </div>
    </div>
  );
}
