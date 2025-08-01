export default function EventItems({ title, tickets, price, imageUrl }) {
  return (
    <div className="flex items-center gap-4 bg-[#f8fbfb] px-4 py-3 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0e1a18] text-base font-medium leading-normal line-clamp-1">{title}</p>
          <p className="text-[#519489] text-sm font-normal leading-normal line-clamp-2">{tickets}</p>
        </div>
      </div>
      <div className="shrink-0">
        <p className="text-[#0e1a18] text-base font-normal leading-normal">{price}</p>
      </div>
    </div>
  );
}