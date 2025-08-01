
function GuideCard({ name, role, bio, imageUrl }) {
  return (
    <div className="flex gap-4 items-center bg-[#f9fbfb] p-4 rounded-lg">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></div>
      <div className="flex flex-col">
        <p className="text-[#101918] text-base font-bold">{name}</p>
        <p className="text-[#578e85] text-base font-normal">{role}</p>
        <p className="text-[#578e85] text-sm mt-1 max-w-xs">{bio}</p>
      </div>
    </div>
  );
}

export default GuideCard;