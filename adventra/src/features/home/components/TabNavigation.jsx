
export default function TabNAvigation ()  {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#d3e4e1] px-4 gap-8">
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-[#8be3d4] text-[#101918] pb-[13px] pt-4">
          <p className="text-sm font-bold">All</p>
        </a>
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#578e85] pb-[13px] pt-4">
          <p className="text-sm font-bold">Food</p>
        </a>
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#578e85] pb-[13px] pt-4">
          <p className="text-sm font-bold">History</p>
        </a>
        <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#578e85] pb-[13px] pt-4">
          <p className="text-sm font-bold">Art</p>
        </a>
      </div>
    </div>
  );
};

