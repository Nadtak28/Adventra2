import { Link } from "react-router-dom";

const GuideCard = ({ id, name, rate, images }) => {
  const imageUrl = images[0] || "../../../../public/assets/hero-img.png"; // fallback if no image
  const rating =
    rate && rate !== "0" ? `${parseFloat(rate).toFixed(1)} ★` : "No rating yet";

  return (
    <Link to={`/guides/${id}`}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div
          className="w-60 h-60 rounded-full bg-center bg-cover bg-no-repeat hover:cursor-pointer"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div>
          <p className="text-[#121416] text-base ">{name}</p>
          <p className="text-[#519489] text-sm">{rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
