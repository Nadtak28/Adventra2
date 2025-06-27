export default function HeroSection({ image, name }) {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#f9fbfb] @[480px]:rounded-xl min-h-[218px]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${image || "default-fallback.jpg"}")`,
          }}
        >
          <div className="flex p-4">
            <p className="text-white tracking-light text-[28px] font-bold leading-tight">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
