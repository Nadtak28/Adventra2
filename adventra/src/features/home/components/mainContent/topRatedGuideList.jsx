import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OneGuideService } from "../../../guides/api/oneGuideService";

export default function TopRatedGuideList({ guides }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (guide) => {
    dispatch(OneGuideService(guide.id));
    navigate(`/guides/${guide.id}`);
  };

  return (
    <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch gap-4 sm:gap-6 md:gap-8 py-4">
        {guides.map((guide, index) => (
          <div
            onClick={() => handleCardClick(guide)}
            key={index}
            className="flex flex-col gap-3 text-center rounded-lg min-w-[9rem] sm:min-w-[10rem] md:min-w-[11rem] lg:min-w-[12rem] pt-4 hover:cursor-pointer snap-start"
          >
            <img
              src={guide.image || "/assets/hero-img.png"}
              alt={guide.name}
              className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover self-center"
            />
            <div>
              <p className="text-[#101918] text-sm sm:text-base font-medium leading-tight">
                {guide.name}
              </p>
              <p className="text-[#578e85] text-xs sm:text-sm font-normal leading-snug">
                {guide.expertise || "Tourism Guide"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//bg-gradient-to-br from-[#0a1b17] via-[#11221f] to-[#1a332d]
