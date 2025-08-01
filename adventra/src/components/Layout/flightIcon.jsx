import { Link } from "react-router-dom";
export default function FlightIcon() {
  return (
    <Link to="/flight&hotel">

    <button
      className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e8f2f1] text-[#0e1a18] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
    >
      <div className="text-[#0e1a18]" data-icon="Airplane" data-size="20px" data-weight="regular">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 16v2l-8-1v4h-2v-4l-8 1v-2l8-5V3.5a1.5 1.5 0 1 1 3 0V11z" />
        </svg>
      </div>
    </button>
    </Link>

  );
}
