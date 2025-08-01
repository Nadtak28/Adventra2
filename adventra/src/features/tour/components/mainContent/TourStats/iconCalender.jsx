function IconCalendar({ size = 24, color = "#101918" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
      viewBox="0 0 256 256"
    >
      <path d="M216,40H184V24a8,8,0,0,0-16,0V40H88V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM76,40V24a8,8,0,0,0-16,0V40Zm104,0V24a8,8,0,0,0-16,0V40ZM216,216H40V104H216ZM216,88H40V56H64v8a8,8,0,0,0,16,0V56h64v8a8,8,0,0,0,16,0V56h24Z"></path>
    </svg>
  );
}

export default IconCalendar;
