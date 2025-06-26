const Card = ({ image, title, description }) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white flex flex-col h-full">
      <div
        className="aspect-video bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[#101918] text-lg font-semibold truncate">{title}</p>
        <p className="text-[#578e85] text-sm leading-snug line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
