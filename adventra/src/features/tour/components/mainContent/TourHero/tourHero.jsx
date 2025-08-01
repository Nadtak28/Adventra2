import Rating from '../../../../../components/like&rating/rating';
import LikeButton from '../../../../../components/like&rating/likeButton';

function TourHero() {
  return (
    <section className="flex flex-col gap-6">
      {/* Image Banner */}
      <div
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD1gPRFi6tLqKH5b3rNbMu5bzFESL_wh0AtEi_rNcdBZ8LaHSU_7fcxdJq-7aJ7LBP8eXHTps3tk7zl6WFkO5hZgu0PWcNB60Bkl189QZ7uazZ1hy7-RT1UGFNUhrvCOzFXz4RJHgKHicBJb2pWsn4v76Vi4bKeGmBBEAYRjmXP1NiA824yudbwJHlOurIO-Ti_E5u3vFXJmapoJRz7ucaIBdemm3MgLYIb0Ckgu9T-BMdH269Z0S-IHFxDcXyQgykYbwJPSzEOJ8')", 
        }}
      ></div> 

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-[#578e85]">
        <a href="#" className="hover:underline">Tours</a>
        <span className="mx-2">/</span>
        <span className="text-[#101918] font-medium">Best of Europe Tour</span>
      </div>

      {/* Title + Stats */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#101918] leading-tight tracking-tight">
          Best of Europe Tour
        </h1>

        <div className="flex items-center gap-4">
          <Rating rating={4.7} />

          <p className="text-base text-[#101918]">150 reviews</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#101918]">$2,500</span>
          <span className="text-sm text-[#578e85]">per person</span>
        </div>
      </div>

      {/* Like Button */}
      <div className="mt-2">
        <LikeButton count={12} />
      </div>
    </section>
  );
}

export default TourHero;