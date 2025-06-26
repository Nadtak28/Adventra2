export default function TabNavigation({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="pb-3 ">
      <div className="flex border-b border-[#d3e4e1] px-4 gap-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`flex flex-col items-center hover:cursor-pointer justify-center border-b-[3px] pb-[13px] pt-4 ${
              selectedCategory === category
                ? "border-b-[#8be3d4] text-[#101918]"
                : "border-b-transparent text-[#578e85]"
            }`}
          >
            <p className="text-sm font-bold">{category}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
