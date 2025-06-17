import ReviewSummary from "../../../../../components/ReviewSection/reviewSummary";

const GuideProfile = () => {
  return (
    <div className="flex flex-col p-4 @container">
      {/* Top Profile Section */}
      <div className="flex flex-row items-start gap-4">
        {/* Profile Image */}
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGbYj7CRHEA6hmKZK0_MFUB2WvxpiEquscm_MD8d7Nu-oQR3lCvSV66Gt85jTfQYHDOU9YcGQgbqLeu2wpdk-ovguzsb37CH0yOn2yfCqGiQOGWBlmH_kRLGqOb_QAUib-yL35J-0k5D3-cxdw39SHlNuHENW0tcftuOIfUGL8PJbkjJ8NNqsXNzsDmLCmAIto6Pya0-rVJIGu8hGtoYLXh0uwC1q6ZlTt7KXMYx8LZAHmojsV_H4rTQu3yqcX0oS8oK7qertFkeM')",
          }}
        ></div>

        {/* Name and Details */}
        <div className="flex flex-col justify-center mt-7">
          <p className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Ava Bennett
          </p>
          <p className="text-[#519489] text-base font-normal leading-normal mt-1">
          Speaks English, Spanish
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Description Section */}
      <div>
        <p className="text-[#0e1a18] text-base font-normal leading-normal">
          Ava is a passionate local guide with over 5 years of experience leading tours in Barcelona.
          She specializes in historical walking tours, culinary experiences, and custom itineraries
          tailored to individual interests. Her tours are known for their engaging storytelling,
          insider tips, and personalized approach, ensuring a memorable and authentic experience
          of the city.
        </p>
      </div>
<div className="mt-10">
      <ReviewSummary  />

</div>
    </div>
  );
};

export default GuideProfile;
