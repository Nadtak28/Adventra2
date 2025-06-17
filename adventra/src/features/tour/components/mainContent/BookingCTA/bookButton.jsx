
function BookButton({ text = "Book Now" }) {
  return (
    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#101918] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-6 hover:bg-[#1a2c2a] transition-colors">
      <span>{text}</span>
    </button>
  );
}

export default BookButton;