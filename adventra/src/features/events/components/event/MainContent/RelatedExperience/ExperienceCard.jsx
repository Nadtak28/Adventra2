function ExperienceCard({ imageSrc, title, description }) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
      <div
        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
        style={{
          backgroundImage: `url("${imageSrc}")`,
        }}
      ></div>
      <div>
        <p className="text-[#0e1a18] text-base font-medium leading-normal">{title}</p>
        <p className="text-[#519489] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;