
const SimilarGuidesCard = ({ name, rating, reviews, image }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div>
        <p className="text-[#0e1a18] text-base font-medium leading-normal">{name}</p>
        <p className="text-[#519489] text-sm font-normal leading-normal">{rating} · {reviews}</p>
      </div>
    </div>
  );
};

export default SimilarGuidesCard;