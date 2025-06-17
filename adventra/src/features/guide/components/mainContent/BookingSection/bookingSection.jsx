import Calendar from './calender';
// import GuestSelector from './guestSelector';
import BookButton from './bookButton';

const BookingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4">
      <Calendar />
            {/* <GuestSelector /> */}
      <BookButton />
    </div>
  );
};

export default BookingSection;