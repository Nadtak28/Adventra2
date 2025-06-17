export default function EditProfileForm() {
  return (
    <>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#101918] text-base font-medium leading-normal pb-2">Name</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101918] focus:outline-0 focus:ring-0 border border-[#d3e4e1] bg-[#f9fbfb] focus:border-[#d3e4e1] h-14 placeholder:text-[#578e85] p-[15px] text-base font-normal leading-normal"
            placeholder="Your name"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#101918] text-base font-medium leading-normal pb-2">Email</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101918] focus:outline-0 focus:ring-0 border border-[#d3e4e1] bg-[#f9fbfb] focus:border-[#d3e4e1] h-14 placeholder:text-[#578e85] p-[15px] text-base font-normal leading-normal"
            placeholder="Your email"
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9f1f0] text-[#101918] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Edit Profile</span>
        </button>
      </div>
    </>
  );
}