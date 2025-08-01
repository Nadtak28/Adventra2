import PriceTag from "./priceTAg";
import BookButton from "./bookButton";
function BookingCTA() {
  return (
    <section className="mt-10 px-4 py-6 bg-[#f9fbfb] rounded-xl flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
      <PriceTag price="$2,500" label="per person" />
      <BookButton text="Book Now" />
    </section>
  );
}

export default BookingCTA;