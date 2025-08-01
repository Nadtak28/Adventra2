import { useNavigate } from "react-router-dom";
import Card from "./card";
import { useDispatch } from "react-redux";
import { OneEventService } from "../../../events/api/oneEventService";
import { OneCityService } from "../../../cities/api/oneCityService";

const CardList = ({ title, items = [], cardType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (event) => {
    dispatch(OneEventService(event.id));
    navigate(`/events/${event.id}`);
  };

  const handleCityClick = (city) => {
    dispatch(OneCityService(city.id));
    navigate(`/cities/${city.id}`);
  };

  return (
    <section className="px-2 sm:px-4 md:px-8 pt-6 pb-8">
      <h2 className="text-[#101918] text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2 px-1 snap-x snap-mandatory">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={
                cardType === "city"
                  ? () => handleCityClick(item)
                  : () => handleCardClick(item)
              }
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] max-w-xs flex-shrink-0 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer snap-start"
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;
