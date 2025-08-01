const BookButton = () => {
  return (
    <div className="flex px-4 py-3 justify-start">
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53e3cb] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">Book</span>
      </button>
    </div>
  );
};

export default BookButton;