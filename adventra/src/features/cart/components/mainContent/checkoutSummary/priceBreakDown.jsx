export default function PriceBreakdownItem({ label, value }) {
  return (
    <div className="flex items-center gap-4 bg-[#f8fbfb] px-4 min-h-14 justify-between">
      <p className="text-[#0e1a18] text-base font-normal leading-normal flex-1 truncate">{label}</p>
      <div className="shrink-0">
        <p className="text-[#0e1a18] text-base font-normal leading-normal">{value}</p>
      </div>
    </div>
  );
}