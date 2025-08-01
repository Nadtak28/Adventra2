
function Rating({ rating = 0 }) {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} filled={true} />
      ))}
      {hasHalfStar && <StarIcon filled={false} half={true} />}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <StarIcon key={`empty-${i}`} filled={false} />
      ))}
    </div>
  );
}

function StarIcon({ filled = false, half = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill={filled ? '#8ce3d5' : 'none'}
      stroke="#8ce3d5"
      strokeWidth={half ? '10' : '0'}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 256 256"
    >
      <path d="M234.5 114.38l-45.1 39.36 13.51 58.6a16 16 0 01-23.84 17.34l-51.11-31-51 31a16 16 0 01-23.84-17.34L66.61 153.8 21.5 114.38a16 16 0 019.11-28.06l59.46-5.15 23.21-55.36a15.95 15.95 0 0129.44 0h0L166 81.17l59.44 5.15a16 16 0 019.11 28.06z" />
    </svg>
  );
}

export default Rating;