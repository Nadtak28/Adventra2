import Card from "./card";

const CardList = ({ title, items = [] }) => {
  return (
    <div className="px-4 pb-6 pt-8">
      <h2 className="text-[#101918] text-[24px] font-bold mb-4">{title}</h2>

      <div className="flex gap-4  overflow-x-auto scrollbar-hide scroll-smooth px-1 " >
        {items.map((item, index) => (
          <div key={index} className="min-w-[300px] border-2 border-cyan-50 max-w-[300px] hover:cursor-pointer flex-shrink-0">
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
