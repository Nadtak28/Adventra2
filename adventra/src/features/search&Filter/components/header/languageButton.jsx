export default function LanguageButton() {
  return (
    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e8f2f1] text-[#0e1a18] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
      <div className="text-[#0e1a18]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,...Z" />
        </svg>
      </div>
    </button>
  );
}
