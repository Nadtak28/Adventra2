function IconDayMarker({ day }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[1.5px] bg-[#d3e4e1] h-2"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Z"></path>
        {/* You can add text inside SVG if you want */}
      </svg>
      <span className="text-[#101918] font-bold text-sm mt-1">{day}</span>
      <div className="w-[1.5px] bg-[#d3e4e1] h-full grow"></div>
    </div>
  );
}

export default IconDayMarker;