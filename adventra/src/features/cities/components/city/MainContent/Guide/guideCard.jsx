export default function GuideCard({ image, name, role }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg min-w-[160px] sm:min-w-[180px] snap-start pt-3 cursor-pointer">
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="text-center">
        <p className="text-[#101918] text-base font-medium">{name}</p>
        <p className="text-[#578e85] text-sm">{role}</p>
      </div>
    </div>
  );
}
