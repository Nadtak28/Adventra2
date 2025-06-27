function HeroImage({ imageUrl }) {
  const finalImageUrl = imageUrl?.startsWith("http")
    ? imageUrl
    : "/assets/hero-img.png";

  return (
    <div
      className="w-full h-[500px] bg-center bg-no-repeat bg-cover rounded-xl border border-red-500"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url("${finalImageUrl}")`,
      }}
    ></div>
  );
}

export default HeroImage;
