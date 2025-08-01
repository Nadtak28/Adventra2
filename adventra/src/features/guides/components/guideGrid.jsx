import GuideCard from "./guideCard";
const GuideGrid = ({ guides }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-40 p-4 ml-16">
      {guides.map((guide, index) => (
        <GuideCard key={index} {...guide} />
      ))}
    </div>
  );
};
export default GuideGrid;
