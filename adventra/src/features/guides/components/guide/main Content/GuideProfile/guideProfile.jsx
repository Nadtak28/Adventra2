import ReviewSummary from "../../../../../../components/ReviewSection/reviewSummary";

const GuideProfile = ({ guide }) => {
  const imageUrl =
    guide.images[0] || "../../../../../../public/assets/hero-img.png";
  const languages =
    guide.languages.length > 0
      ? guide.languages.map((lang) => lang.name).join(", ")
      : "N/A";
  const price = guide.price;
  const phone_number = guide.phone;
  return (
    <div className="flex flex-col p-4 @container">
      <div className="flex flex-row items-start gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 sm:min-h-32 sm:w-32"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>

        <div className="flex flex-col justify-center mt-7">
          <p className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em]">
            {guide.name}
          </p>
          <p className="text-[#519489] text-base font-normal leading-normal mt-1">
            Speaks: {languages}
          </p>
          <p className="text-[#519489] text-base font-normal leading-normal mt-1">
            Phone Number: {phone_number}
          </p>
          <p className="text-[#519489] text-base font-normal leading-normal mt-1">
            Booking Price: {price}$
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <p className="text-[#0e1a18] text-base font-normal leading-normal">
          {guide.description}
        </p>
      </div>

      {guide.feedbacks.length > 0 && (
        <div className="mt-10">
          <ReviewSummary feedbacks={guide.feedbacks} />
        </div>
      )}
    </div>
  );
};

export default GuideProfile;
