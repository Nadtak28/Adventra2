export default function BookingTabs() {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#d3e4e1] px-4 gap-8">
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-[#8ce3d5] text-[#101918] pb-[13px] pt-4">
          <p className="text-[#101918] text-sm font-bold leading-normal tracking-[0.015em]">Group Tours</p>
        </a>
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#578e85] pb-[13px] pt-4">
          <p className="text-[#578e85] text-sm font-bold leading-normal tracking-[0.015em]">Individual Trips</p>
        </a>
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#578e85] pb-[13px] pt-4">
          <p className="text-[#578e85] text-sm font-bold leading-normal tracking-[0.015em]">Events</p>
        </a>
      </div>
    </div>
  );
}