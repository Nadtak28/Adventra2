import ReviewSummary from './reviewSummary';
import RatingBreakdown from './ratingBreakDown';
import ReviewCard from './reviewCard';

function ReviewsSection() {
  const reviews = [
    {
      name: "Emily Harper",
      date: "July 15, 2023",
      rating: 5,
      comment: "Absolutely loved this tour! The destinations were breathtaking, and the pace was perfect. Sophia's expertise and enthusiasm made the trip unforgettable.",
    },
    {
      name: "Chloe Reynolds",
      date: "May 10, 2023",
      rating: 4,
      comment: "The tour was well-organized and covered a lot of ground. The accommodations were comfortable, and the group size was just right.",
    },
    {
      name: "Owen Mitchell",
      date: "June 22, 2023",
      rating: 5,
      comment: "Sophia was knowledgeable and engaging, making the trip even more enjoyable. I would definitely book another tour with this company.",
    },
  ];

  return (
    <section className="mt-10 px-4">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Reviews</h2>

      <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
        <ReviewSummary />
        <RatingBreakdown />
      </div>

      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}

    </section>
  );
}

export default ReviewsSection;