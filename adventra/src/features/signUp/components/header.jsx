
export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2f1] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e1a18]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0e1a18] text-lg font-bold leading-tight tracking-[-0.015em]">Adventra</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
       
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5ae4cd] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign up</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8f2f1] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Log in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
