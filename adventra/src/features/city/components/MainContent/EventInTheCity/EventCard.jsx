export default function EventCard({ image, title, description }) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="text-[#101918] text-base font-medium leading-normal">{title}</p>
        <p className="text-[#578e85] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}