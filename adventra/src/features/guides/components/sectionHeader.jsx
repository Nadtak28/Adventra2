const SectionHeader = ({ title, description }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-3 p-4 bg-white">
        <p className="text-[#121416] tracking-light text-[32px] font-bold leading-tight min-w-72">
          {title}
        </p>
      </div>
      <p className="text-[#519489] text-base font-normal leading-normal pb-3 pt-1 px-4">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
