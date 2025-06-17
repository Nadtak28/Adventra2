const Tabs = () => (
  <div className="flex space-x-6 border-b mb-6">
    {["Hotels", "Flights"].map((tab, index) => (
      <button
        key={tab}
        className={`pb-2 ${index === 0 ? "border-b-2 border-black font-medium" : "text-gray-500"}`}
      >
        {tab}
      </button>
    ))}
  </div>
);
export default Tabs;
