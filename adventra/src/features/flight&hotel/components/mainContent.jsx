import CityFilters from "./mainContent/CityFilter/cityFilter";
import DestinationGrid from "./mainContent/Destinition/destinitionGrid";
import SearchInput from "./mainContent/SearchInput/searchInput";
import Tabs from "./mainContent/Tabs/tabs";
import Title from "./mainContent/Title/title";

const MainContent = () => {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <Title />
      <SearchInput />
      <Tabs />
      <CityFilters />
      <DestinationGrid />
    </main>
  );
};

export default MainContent;