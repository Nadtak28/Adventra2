import { useRef } from "react";

export default function TabNavigation({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const containerRef = useRef(null);

  const handleClick = (category, idx) => {
    onSelectCategory(category);
    // Scroll the clicked tab fully into view smoothly
    const container = containerRef.current;
    const button = container.children[idx];
    if (button && container) {
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="pb-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -webkit-overflow-scrolling-touch"
    >
      <div className="flex gap-4 sm:gap-6 md:gap-8 border-b border-[#d3e4e1] px-2 sm:px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {categories.map((category, idx) => (
          <button
            key={category}
            onClick={() => handleClick(category, idx)}
            className={`cursor-pointer flex-shrink-0 snap-start whitespace-nowrap text-sm font-semibold px-2 sm:px-3 py-2 border-b-2 transition-colors duration-200 hover:text-[#101918] hover:border-[#8be3d4] ${
              selectedCategory === category
                ? "border-[#8be3d4] text-[#101918]"
                : "border-transparent text-[#578e85]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
