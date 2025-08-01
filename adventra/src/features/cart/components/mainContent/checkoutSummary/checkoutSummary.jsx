import PriceBreakdownItem from './priceBreakDown';

export default function CheckoutSummary() {
  return (
    <>
      <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Total</h2>
      <PriceBreakdownItem label="Subtotal" value="$550" />
      <PriceBreakdownItem label="Taxes" value="$50" />
      <PriceBreakdownItem label="Total" value="$600" />
      <div className="flex px-4 py-3 justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#53e3cb] text-[#0e1a18] text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Checkout</span>
        </button>
      </div>
    </>
  );
}