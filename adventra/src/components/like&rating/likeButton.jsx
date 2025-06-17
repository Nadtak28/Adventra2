
function LikeButton({ count = 0 }) {
  return (
    <button className="flex items-center gap-2 text-[#578e85]">
      <ThumbsUpIcon />
      <span>{count}</span>
    </button>
  );
}

function ThumbsUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M234 80.12A24 24 0 00216 72H160V56a40 40 0 00-40-40 8 8 0 00-7.16 4.42L75.06 96H32a16 16 0 00-16 16v88a16 16 0 0016 16H204a24 24 0 0023.82-21l12-96A24 24 0 00234 80.12z" />
    </svg>
  );
}

export default LikeButton;