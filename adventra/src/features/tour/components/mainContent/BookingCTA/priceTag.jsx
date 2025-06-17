
function PriceTag({ price = "$2,500", label = "per person" }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#101918] text-2xl font-bold">{price}</span>
      <span className="text-[#578e85] text-sm font-normal">{label}</span>
    </div>
  );
}

export default PriceTag;