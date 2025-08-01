function StatItem({ icon: IconComponent, label, value }) {
  return (
    <div className="flex items-center gap-3 text-[#101918]">
{IconComponent}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#578e85]">{label}</span>
        <span className="text-base font-bold">{value}</span>
      </div>
    </div>
  );
}

export default StatItem;
