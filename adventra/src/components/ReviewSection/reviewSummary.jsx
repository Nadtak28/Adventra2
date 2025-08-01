import Rating from '../like&rating/rating';

function ReviewSummary() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#101918] text-4xl font-black leading-tight tracking-[-0.033em]">4.8</p>
      <div className="flex items-center gap-2">
        <Rating rating={4.8} />
        <p className="text-[#578e85] text-base font-normal leading-normal">150 reviews</p>
      </div>
    </div>
  );
}

export default ReviewSummary;