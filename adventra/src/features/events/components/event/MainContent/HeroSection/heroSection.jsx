import HeroImage from "./heroImage";
import DotsIndicator from "./dotsIndicator"; // placeholder

function HeroSection({ imageUrl }) {
  return (
    <div className="w-full h-full max-w-4xl mx-auto p-4">
      <HeroImage imageUrl={imageUrl} />
      <DotsIndicator />
    </div>
  );
}

export default HeroSection;
