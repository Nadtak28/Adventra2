import Footer from '../components/header&footer/footer';
import CitiesCardList from '../features/cities/components/citiesCardList';
function Cities() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbfb] group/design-root overflow-x-hidden font-sans">
      <CitiesCardList />
      <Footer />
    </div>
  );
}

export default Cities;