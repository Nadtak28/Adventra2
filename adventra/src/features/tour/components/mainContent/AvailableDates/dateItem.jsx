
function DateItem({ date }) {
  return (
    <div className="flex items-center gap-4 bg-[#f9fbfb] px-4 min-h-14">
      <p className="text-[#101918] text-base font-normal leading-normal flex-1 truncate">{date}</p>
    </div>
  );
}

export default DateItem;