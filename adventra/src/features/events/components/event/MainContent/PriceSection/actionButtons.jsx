function ActionButtons() {
  return (
    <div className="flex justify-stretch">
      <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53e3cb] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Add to cart</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8f2f1] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Book now</span>
        </button>
      </div>
    </div>
  );
}

export default ActionButtons;