export default function InfoSection({ title, content, component }) {
  return (
    <div className="w-full">
      <h2 className="text-[#101918] text-[20px] md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 md:px-6 pb-3 pt-5">
        {title}
      </h2>
      {component ? (
        component
      ) : (
        <p className="text-[#578e85] text-base font-normal leading-normal pb-3 pt-1 px-4 md:px-6">
          {content}
        </p>
      )}
    </div>
  );
}
