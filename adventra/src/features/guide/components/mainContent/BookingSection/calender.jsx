const Calendar = () => {
  return (
    <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
      <div className="flex items-center p-1 justify-between">
        <button>
          <div
            className="text-[#0e1a18] flex size-10 items-center justify-center"
            data-icon="CaretLeft"
            data-size="18px"
            data-weight="regular"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </div>
        </button>
        <p className="text-[#0e1a18] text-base font-bold leading-tight flex-1 text-center">July 2024</p>
        <button>
          <div
            className="text-[#0e1a18] flex size-10 items-center justify-center"
            data-icon="CaretRight"
            data-size="18px"
            data-weight="regular"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="grid grid-cols-7">
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
        <p className="text-[#0e1a18] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>

        {[...Array(30)].map((_, i) => (
          <button key={i} className="h-12 w-full text-[#0e1a18] text-sm font-medium leading-normal">
            <div className={`flex size-full items-center justify-center ${i === 4 ? 'rounded-full bg-[#53e3cb]' : 'rounded-full'}`}>
              {i + 1}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;