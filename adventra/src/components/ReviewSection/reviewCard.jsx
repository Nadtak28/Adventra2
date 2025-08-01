import LikeButton from '../like&rating/likeButton';

function ReviewCard({ name, date, rating, comment }) {
  return (
    <div className="flex flex-col gap-2 border-b border-solid border-[#e9f1f0] pb-6">
      <div className="flex items-center gap-3">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD1gPRFi6tLqKH5b3rNbMu5bzFESL_wh0AtEi_rNcdBZ8LaHSU_7fcxdJq-7aJ7LBP8eXHTps3tk7zl6WFkO5hZgu0PWcNB60Bkl189QZ7uazZ1hy7-RT1UGFNUhrvCOzFXz4RJHgKHicBJb2pWsn4v76Vi4bKeGmBBEAYRjmXP1NiA824yudbwJHlOurIO-Ti_E5u3vFXJmapoJRz7ucaIBdemm3MgLYIb0Ckgu9T-BMdH269Z0S-IHFxDcXyQgykYbwJPSzEOJ8')" 
        }}></div>
        <div className="flex-1">
          <p className="text-[#101918] text-base font-medium leading-normal">{name}</p>
          <p className="text-[#578e85] text-sm font-normal leading-normal">{date}</p>
        </div>
      </div>

      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`${i < rating ? 'text-[#8ce3d5]' : 'text-[#d3e4e1]'}`} data-icon="Star" data-size="20px" data-weight="fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M231,104.14,178.25,96.86l-21.14-54.25a8,8,0,0,0-14.75,0L121.22,96.83,68.5,104.11a8,8,0,0,0-4.46,14.09l39.41,37.65-10.54,53.33a8,8,0,0,0,11.62,8.46L128,194.17l47.4,23.47a8,8,0,0,0,11.62-8.46l-10.54-53.33,39.41-37.65A8,8,0,0,0,235.46,104Z"></path>
            </svg>
          </div>
        ))}
      </div>

      <p className="text-[#101918] text-base font-normal leading-normal">{comment}</p>

      <div className="flex gap-9 text-[#578e85]">
        <LikeButton count={12} />
        <LikeButton count={3} isDislike={true} />
      </div>
    </div>
  );
}

export default ReviewCard;