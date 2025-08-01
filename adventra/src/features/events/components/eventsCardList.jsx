import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventsService } from "../api/eventsService";
import { OneEventService } from "../api/oneEventService";
import { useNavigate } from "react-router-dom";

export default function EventCardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [touchStartX, setTouchStartX] = useState(null);

  const { list: events, loadingList } = useSelector((state) => state.events);

  // Dispatch only if not loading and no events yet
  useEffect(() => {
    if (!loadingList && events.length === 0) {
      dispatch(EventsService());
    }
  }, [dispatch, loadingList, events.length]);

  // Auto-scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 50) handleScroll("left");
    else if (delta < -50) handleScroll("right");
    setTouchStartX(null);
  };

  const handleClick = (id) => {
    dispatch(OneEventService(id));
    navigate(`/events/${id}`);
  };

  if (loadingList || !events.length) return null;

  return (
    <div
      ref={scrollRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide max-w-full pointer-events-auto"
    >
      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => handleClick(event.id)}
          className="min-w-[250px] max-w-[250px] bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden flex-shrink-0 hover:cursor-pointer"
        >
          <img
            src={event.images?.[0]?.url ?? "/assets/hero-img.png"}
            alt={event.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#101918]">
              {event.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
