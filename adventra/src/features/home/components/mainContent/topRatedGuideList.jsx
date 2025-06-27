export default function TopRatedGuideList({ guides }) {
  return (
    <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-8">
        {guides.map((guide, index) => (
          <div key={index} className="flex flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
            <img
              src={guide.image || "/default-guide.jpg"} // Fallback image
              className="rounded-full w-40 h-40 object-cover self-center"
            />
            <div>
              <p className="text-[#101918] text-base font-medium leading-normal">{guide.name}</p>
              <p className="text-[#578e85] text-sm font-normal leading-normal">
                {guide.expertise || "Tourism Guide"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
