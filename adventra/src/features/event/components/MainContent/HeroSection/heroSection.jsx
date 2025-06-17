import HeroImage from './heroImage';
import DotsIndicator from './dotsIndicator';

function HeroSection() {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <HeroImage />
        <DotsIndicator />
      </div>
    </div>
  );
}

export default HeroSection;