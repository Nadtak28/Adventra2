export default function SettingsItem({
  label,
  value,
  isToggle,
  icon,
  className = "",
  onClick,
}) {
  return (
    <div
      className={`flex items-center gap-4 bg-[#f9fbfb] px-4 min-h-14 justify-between ${className}`}
      onClick={onClick}
    >
      <p className="text-[#101918] text-base font-normal leading-normal flex-1 truncate">
        {label}
      </p>
      <div className="shrink-0">
        {isToggle ? (
          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full  border-none bg-[#e9f1f0] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#8ce3d5]">
            <div
              className="h-full w-[27px] rounded-full bg-white hover:cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
              }}
            ></div>
            <input type="checkbox" className="invisible absolute" />
          </label>
        ) : icon === "ArrowRight" ? (
          <div className="text-[#101918] flex size-7 items-center justify-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </div>
        ) : (
          <p className="text-[#101918] text-base font-normal leading-normal">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
