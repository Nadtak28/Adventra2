import Card from "./card";


const CardList = ({ title, items, isScrollable = false }) => {
  const containerClass = isScrollable
    ? "flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-4 gap-3"
    : "grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4";

  return (
    <div className="px-4 pb-3 pt-5">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em]">{title}</h2>
      <div className={containerClass}>
        {items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
