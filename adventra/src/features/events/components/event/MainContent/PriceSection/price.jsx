function Price({ price }) {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h3 className="text-[#0e1a18] text-lg font-bold leading-tight px-4 pb-2 pt-4">
        Price
      </h3>
      <p className="text-[#0e1a18] text-base font-normal pb-3 pt-1 px-4">
        ${price} per person
      </p>
    </div>
  );
}

export default Price;
