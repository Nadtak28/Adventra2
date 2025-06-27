export default function EventCard({ image, title, description }) {
  return (
    <div className="border-2 border-[#578e85] min-w-[220px] max-w-[220px] bg-white rounded-xl shadow-sm flex flex-col overflow-hidden">
      <div
        className="w-full aspect-video bg-center bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="p-3 space-y-1">
        <p className="text-[#101918] text-sm font-semibold truncate">{title}</p>
        <p className="text-[#578e85] text-xs line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
