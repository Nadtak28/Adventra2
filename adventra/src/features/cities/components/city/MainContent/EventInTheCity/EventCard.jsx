export default function EventCard({ image, title, description }) {
  return (
    <div className="border border-[#578e85] bg-white rounded-xl shadow-sm flex flex-col overflow-hidden min-w-[180px] sm:min-w-[220px] max-w-[220px] snap-start cursor-pointer">
      <div
        className="w-full aspect-video bg-center bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="p-3 space-y-1">
        <p className="text-[#101918] text-sm font-semibold truncate">{title}</p>
        <p className="text-[#578e85] text-xs line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
