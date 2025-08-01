const Card = ({ image, title, description }) => {
  return (
    <div className="rounded-xl shadow-sm overflow-hidden bg-white flex flex-col h-full transition-transform duration-300 hover:scale-[1.03]">
      <div
        className="aspect-video bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-3 sm:p-4 flex flex-col gap-1">
        <p className="text-[#101918] text-base sm:text-lg font-semibold truncate">
          {title}
        </p>
        <p className="text-[#578e85] text-xs sm:text-sm leading-snug line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
