const DestinationCard = ({ name, price, img, highlight }) => (
  <div>
    <img
      src={`https://source.unsplash.com/400x300/?${img}`}
      alt={name}
      className="rounded-lg mb-2"
    />
    <h3 className="font-medium">{name}</h3>
    <p className={`text-sm ${highlight ? "text-green-600" : "text-gray-500"}`}>{price}</p>
  </div>
);
export default DestinationCard;