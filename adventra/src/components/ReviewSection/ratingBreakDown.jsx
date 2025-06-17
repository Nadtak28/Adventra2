
function ProgressBar({ percent, label }) {
  return (
    <div className="flex items-center gap-2 w-full max-w-xs">
      <p className="text-sm text-[#101918]">{label}</p>
      <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#d3e4e1]">
        <div className="rounded-full bg-[#8ce3d5]" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="text-sm text-[#578e85] text-right">{percent}%</p>
    </div>
  );
}

function RatingBreakdown() {
  const ratings = [
    { label: '5', percent: 70 },
    { label: '4', percent: 20 },
    { label: '3', percent: 5 },
    { label: '2', percent: 3 },
    { label: '1', percent: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {ratings.map((rating) => (
        <ProgressBar key={rating.label} {...rating} />
      ))}
    </div>
  );
}

export default RatingBreakdown;