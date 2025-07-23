// import { useState } from "react";
// import { motion } from "framer-motion";


// import { FaUser as FaUserTrack } from "react-icons/fa";

// export const TrackSlotSelector = () => {
//   const [guestNumber, setGuestNumber] = useState(1);
//   const increment = () => setGuestNumber((prev) => Math.min(prev + 1, 6));
//   const decrement = () => setGuestNumber((prev) => Math.max(prev - 1, 1));

//   return (
//     <div className="flex flex-col items-center gap-6 py-6">
//       <div className="flex gap-2">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
//               i < guestNumber ? "bg-[#53e3cb] text-white" : "border-[#53e3cb] text-[#53e3cb]"
//             }`}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
//           >
//             <FaUserTrack />
//           </motion.div>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <button
//           onClick={decrement}
//           className="h-10 w-10 rounded-full bg-[#d1e6e3] text-[#0e1a18] text-xl font-bold"
//         >
//           −
//         </button>
//         <span className="text-xl font-semibold text-[#0e1a18]">
//           {guestNumber} guest{guestNumber > 1 ? "s" : ""}
//         </span>
//         <button
//           onClick={increment}
//           className="h-10 w-10 rounded-full bg-[#d1e6e3] text-[#0e1a18] text-xl font-bold"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };
// export default TrackSlotSelector;