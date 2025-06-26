import Card from "./card";

const CardList = ({ title, items = [] }) => {
  return (
    <div className="px-4 pb-6 pt-8">
      <h2 className="text-[#101918] text-[24px] font-bold mb-4">{title}</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-1 hover:cursor-pointer" >
        {items.map((item, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px] flex-shrink-0">
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
