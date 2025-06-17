export default function SearchInput({ placeholder = "Search" }) {
  return (
    <label className="flex flex-col min-w-40 h-10 max-w-64">
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div className="text-[#519489] flex border-none bg-[#e8f2f1] items-center justify-center pl-4 rounded-l-xl border-r-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11...Z" />
          </svg>
        </div>
        <input
          placeholder={placeholder}
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e1a18] focus:outline-0 focus:ring-0 border-none bg-[#e8f2f1] focus:border-none h-full placeholder:text-[#519489] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
        />
      </div>
    </label>
  );
}
