/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import EventCardList from "./eventsCardList";
import { useNavigate } from "react-router-dom";
import { EventsService } from "../api/eventsService";
import { OneEventService } from "../api/oneEventService";

export default function HeroSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const events = useSelector((state) => state.events.list);
  const loading = useSelector((state) => state.events.loadingList);

  const [index, setIndex] = useState(0);

  // Dispatch EventsService only if not loading and no events yet
  useEffect(() => {
    if (!loading && events.length === 0) {
      dispatch(EventsService());
    }
  }, [dispatch, loading, events.length]);

  // Cycle through events every 6 seconds
  useEffect(() => {
    if (!events.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [events]);

  if (!events.length) return null;

  const event = events[index];
  const imageUrl =
    event?.images?.[0]?.url && event.images[0].url.startsWith("http")
      ? event.images[0].url
      : "/assets/hero-img.png";

  const handleDiscover = () => {
    if (!event?.slug) return;
    dispatch(OneEventService(event.slug));
    navigate(`/events/${event.slug}`);
  };

  return (
    <div className="absolute inset-0 bg-cover bg-bottom"
>
      <AnimatePresence mode="wait">
        <motion.div
          key={event?.id ?? index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      <div className="relative z-20 w-full flex h-full">
        <div className="w-1/2 flex flex-col justify-center pl-6 md:pl-20 pr-4 text-white">
          <motion.h1
            key={event?.name ?? "title"}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {event?.name ?? "Untitled Event"}
          </motion.h1>

          <motion.p
            key={event?.description ?? "desc"}
            className="text-lg md:text-xl mb-6 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {(event?.description ?? "No description available.").slice(0, 200)}...
          </motion.p>

          <motion.button
            onClick={handleDiscover}
            className="bg-[#519489] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#89eedd] hover:cursor-pointer w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Discover Event
          </motion.button>
        </div>

        <div className="w-2/3 flex items-center justify-end mt-64 pr-6 md:pr-12">
          <EventCardList />
        </div>
      </div>
    </div>
  );
}
