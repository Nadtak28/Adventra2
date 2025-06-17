import CardList from "./mainContent/cardList";
import SearchBar from "./mainContent/searchBar";
import TabNavigation from "./mainContent/TabNavigation";
import TopRatedGuideList from "./mainContent/topRatedGuideList";

export default function MainContent(){

    const latestTours = [
    {
      title: "Explore the Majestic Peaks",
      description: "Embark on a guided tour through the stunning mountain ranges.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCHlLKo6xLowmDXHUotUoMeIxTWngHhS86rkGrC9cyLDRPadnVNLiWCF6efHmdOD3LXQt_x1w1gb0E4E5uPE9kQ3mx1aQNGMkBw5P-bMbYU32HEvCs8-l1f5LGsOpOTvyE8df0vn9YLQLgXzROViYNn0lxs4viN_yNSMVdyOwGLGQmBvVHzDrA99Xhw2KwcNQ5PesWpYLkD4LrqSg78w-xQnm1WLT8qG-k0tssn3W-au-y-DiJWqOtUNetTAIJ_4rPGqtxL8j0qEQ ",
    },
    {
      title: "City Lights Adventure",
      description: "Discover the vibrant nightlife and iconic landmarks of the city.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0RlIBZ6wg05plNYEwIE7ERbpksUCKnClYvByXmFPKQSO6HNxDF8jjil_feTZzzusHoC1kRn65eKdDLVlCtqrURSSexdgd6QWBCuzgGgD-7ECz7_eyDTBIcQsEqH-UUL84AeILjOO9dDIdVKG_QcesI6j0Aig8iBiKPHOZQfTz_uVr7ScOVkM0XH4J5ui-mwZE-1NL29Y-ORLb9aTfuvtXedApT_JjIDVFS4l0wvsc6rtc_CCWbd46OQXfrBavxchgsCWSYhp_lp4 ",
    },
    {
      title: "Tropical Beach Getaway",
      description: "Relax and unwind on the pristine beaches of a tropical paradise.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Yb5k-zflbNtKbeZjw0aPbeZ9JLrUSZa_AiHDhkqX-EbMW3eupvqaoGgPswZBWvj4Nq5vnsaRpWaSoxXRQDA2FcJbvZjKxRs-fGlZfQx4rJDD5WXZlW9Fs9F4jsxg_X6TBILBB2Xc-UnBaapafW3axlK4VFWkGILNQJxbKzPhRCoZLi45J4QQorqBANjD-kEIIlqSO2EAHu13sJtgklcgUr9q-9_SqPJdAF-P05cW4V7-RGG_JV5uO-cHvLzSNMSWdaGTGWpzpG8 ",
    },
  ];

  const topEvents = [
    {
      title: "Culinary Delights Tour",
      description: "Experience the local cuisine with a guided food tour.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjd23ifOavUTQftH3xcB3DHoom28qf0-idwdQ2tNpNkKlx_h78cUY3-dTjR0l1bflZWCKy4-dA0BqYGMA3P5ayObHx0DyAHuRQ3KVkiF-3cXn5k3eNLlxEoq4rW96aJ9OyQOwJywCzw7bPsSM2zr6FTNzGb9M2AbIaxUSN17U3gnQ9tR9LnrccXkP-b7ouPrJlsDP1LZ5r68sSV1Ql5do-MNabA1LCbTr969i9XHQ5EyNf6BZ4-6mfJHJbGO8E30beqRjcCrYSA7k ",
    },
    {
      title: "Historical Walking Tour",
      description: "Discover the city's rich history with a walking tour.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp8Yj2NN69SnqslfVIA2vIoV8VTMrxDkbjQStn2k4Drw-GYeCGIcSxqERZK4LknBPoZ8UHaH9cZedfjecWgLg4K-J5pTUX8Z4r-6q1EdZY2JIbESFnminegB4XadVzppMI3mA9xJmeGTVPoCbx_1GczqKNCYH6kH5R6gF0A_YFSinkAyk0DZDN6QHZwzaSOawJE-wdnjTZ7CnUG5BB3x1p-_24BBwV1P8h4X4bQc1-qpYVccRa9V1opUdJ_BlQrVI0d3-0lTSS2nU ",
    },
    {
      title: "Art and Culture Exploration",
      description: "Immerse yourself in the art and culture of the region.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX_irvCbNycDG_pGxiv-mFS1tC8WKxLCbFiwP67bXRGvZ96BK-HXKmFYUrQixlCH0LQdGyW6ucFeBCWsO97U7AkmiAcv0lC0yMCYIieEYy_O2LKxarIaMUUwekJj8pvKQJt4txZzKVM-1AgtxpqdSJuavpE3hZ89RBwDtroZ5lENZ8tT7GrxvLkq_wkNC6TDFzRvF5d6xi1YPXO5xOBvkk9Ert7lVtTdcJdDZ53HBbwyZG4-hq1mtMm9hG8Kr6dt1zGhFTgQevrWY ",
    },
  ];

  const featuredCities = [
    {
      title: "Paris",
      description: "City of Love and Lights",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKobBUOtvAKF29K8ww7kWGjhyWUR2Hgvu_VOuTLfLSsSGjn-B6adAu92VqCrOH3kJBMjW6OQye9P5wjAtejQK_b49433j46e2EOuf2e4okGNQxPpBbih8S8kMnyXrupU_v96-wwu5QxjA-uHyo9FslnDkj8jbbe3iusp5fhG6OFRRySVP3lppMTywHezEsSw68sQZMJ9s86mNCr4CrAXT6xaZuCqp-ZaCIFqxb17DDx6mjSTK4jtPK2y2Ig_UQBQqn7iY5aGn14JY ",
    },
    {
      title: "Rome",
      description: "Eternal City of Ancient Wonders",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwqRq07WtGQe_sWmyZHxLBYcDjhcoISFCcoxghLIJdJo6TqsVt6a2S8IYyRL75zEEj2CAy62-3v0g6h2nhtR8yKRa_Y7MIjPa9yO4BxmCdE4m0V-o6QdzuSyDJRV8MW2fqyjSp2g9Q8LoLCPnQmYz4eDoxAUZsm3lpPzLTs1twXLm476mrLxyfrnxoHeWPkVacJ-dRmcWnq4ta3sNKzBJwnAblWyIboowmHvTAe1isXOB8A1ovnGKbzhKGvkG0Olq0J7NrlO0iJN8 ",
    },
    {
      title: "Tokyo",
      description: "Vibrant Metropolis of Tradition and Modernity",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdfazsyYXdGdRPqqj4SplwG7QpyniwIlL71N-Jq9PjeYwb2w5UIZDlw6Qcq-uOtzSA_1heReeu0QouscjJzFku1iPxV7eohkgqRJBUpze8cXb2m-egc6DGhIUuwLyHCsiciaEhUozK2bhicwXVZ_t00-rdQCxE099Cgr1WsKZYklR8Dthitb7PKg5r32EMclQV6r3mmNTijJdeWyA-boFLfA0Fcy1NgmhnDrnNEuRKZKBHIBcPgPlZpcJyPDYN4oEHXgiH-XOX2uU ",
    },
  ];

  return (
      <main className="px-40 py-5 flex justify-center">
        <div className="max-w-[960px] w-full">
          <SearchBar placeholder="Search for tours, events, and more" />
          <CardList title="Latest Group Tours" items={latestTours} isScrollable={true} />
          <CardList title="Top-Rated Events" items={topEvents} />
          <TabNavigation />
          <CardList title="Events by Type" items={topEvents} />
          <CardList title="Cities with Most Events" items={featuredCities} />
          <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top-Rated Guides</h2>
          <TopRatedGuideList />
        </div>
      </main>
  );

}