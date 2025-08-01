export default function HeroSection({ image, name }) {
  return (
    <div className="px-4 py-3">
      <div
        className="bg-cover bg-center rounded-xl min-h-[218px] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${
            image || "/assets/hero-img.png"
          }")`,
        }}
      >
        <div className="p-4">
          <p className="text-white text-2xl sm:text-3xl font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
}
