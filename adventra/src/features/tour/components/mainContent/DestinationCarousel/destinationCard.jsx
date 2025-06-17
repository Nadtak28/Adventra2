
function DestinationCard({ city, imageUrl }) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></div>
      <p className="text-[#101918] text-base font-medium leading-normal">{city}</p>
    </div>
  );
}

export default DestinationCard;