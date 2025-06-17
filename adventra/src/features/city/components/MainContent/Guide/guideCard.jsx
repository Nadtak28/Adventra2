export default function GuideCard({ image, name, role }) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="text-[#101918] text-base font-medium leading-normal">{name}</p>
        <p className="text-[#578e85] text-sm font-normal leading-normal">{role}</p>
      </div>
    </div>
  );
}