import SearchBar from "./searchBar";

export default function Header(){
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9f1f0] px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-[#101918]">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
          <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor" />
        </svg>
        <h2 className="text-lg font-bold">Adventra</h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <SearchBar placeholder="Search" />

        <div className="flex gap-2">
            
          <button className="flex items-center justify-center rounded-full h-10 bg-[#e9f1f0] text-[#101918] gap-2 text-sm font-bold min-w-0 px-2.5">
            <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z" />
            </svg>
          </button>

          <button className="flex items-center justify-center rounded-full h-10 bg-[#e9f1f0] text-[#101918] gap-2 text-sm font-bold min-w-0 px-2.5">
            <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
            </svg>
          </button>

          <button className="flex items-center justify-center rounded-full h-10 bg-[#e9f1f0] text-[#101918] gap-2 text-sm font-bold min-w-0 px-2.5">
            <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
          </button>

          <button className="flex items-center justify-center rounded-full h-10 bg-[#e9f1f0] text-[#101918] gap-2 text-sm font-bold min-w-0 px-2.5">
            <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
            </svg>
          </button>

        </div>

        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBbuu-8Nba7hmKAtCjPaOeVqTK93YtBB4hEK2QLxu21eWNuba-XWdfFoF5xwcRyFGo2iQmDkDs6Om8PWYAyaQro3eG8rJ_pAlLo-X9OfAT_hpBEAEDUutU4lMIvzYc-RmYKUlijceSmqiuZ2adToDQvQoBf7jkoojVl2vKttGA0e8kTIYFoJ-s276F1ufKBURCrYkaybFg33c_ZXc2YtrrJnAp416x9SCWH9eOMvqIqYJJwYAICU7wkWS5hPzndKp-L1W7ZddnsxIo )" }}></div>
      </div>
    </header>
  );
};

