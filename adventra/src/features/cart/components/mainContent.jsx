import Breadcrumb from './mainContent/breadCrumbs/breadCrumbs';
import EventItems from './mainContent/eventsItems/eventItems';
import CheckoutSummary from './mainContent/checkoutSummary/checkoutSummary';
import PageTitle from './mainContent/pageTitle/pageTitle';

export default function MainContent() {
  return (
    <main className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Title */}
      <PageTitle/>

        {/* Individual Trips */}
        <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Individual Trip</h2>
        <EventItems
          title="Hiking in the Alps"
          tickets="2 tickets"
          price="$200"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDT8LvzKgjJQH6nx1cz8m_eiBUjN4MeJYLU55iP0NMA8qkPwhGoPjzXk8sk4EMWZOZaRuaS-G6RY3YWzgYIQUUgxpfCJbvBhy7T3gypJQz4noDR0oF1tBpWaUG6Z9v8R8zKQh3EoGkKjQR-KGJpMLRJgEzNZ-ItR2QxIgxL_u-s6G1jcGPQo5oNkNiDJQkECOfamgo78ZFahDqDnTGAI79fCj6S4XVSq1xLvZ6x1qBxFblelHuCIGnfNCx6DhGyiCKhIyeAEGU4Ra4" 
        />
        <EventItems
          title="City Tour of Paris"
          tickets="1 ticket"
          price="$50"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDjm9WmbbC4FW_LE-497-jnoJ0UTMACdhaR4uwwrt0ntu6GB81p081vJr4FdHE0HdtQ2LXmZ2wRnUaPtB9ioNAVBxjgmIMqWNqY2YQzuMUQe02BkGTp7eWmcREH2J2Lg39LW1ScKg8Q0pH6wPba3VBg3R1X1Tqe4Xq6WdGYNURW0q_cXsnlIkeTYZLDSC5Jya0jfslQ_bR7IJPoUSn2vkBW8kN2ubmFMBMhz8NfCRuw7U2q97Zhb5DgZMnsXoWuleCIV2KuKMrtG-U" 
        />
        <EventItems
          title="Scuba Diving in the Great Barrier Reef"
          tickets="3 tickets"
          price="$300"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCuw92DfYG3c6uheSGeroZK_stRfdksobm33yNTRG2ufAd-4i9kkd-Bb55uIZHP68MvnOH0rF5W76vGw-6xPbwIQmSA35XEUENqGXajTujYBvsUeiD1GiaATeCcM8mXqu5GFUfEv9cKayK6f3oO22WIhD1Fyw2dV8-HR91XoCPR0koTvGYjZY21ypsnKq-KG6E9bBKeMH8IAttsX0TFZBL9pso9Mo8Ry41kdMwipH9Hup1WuMqKlEb3QxNl6rz0VUoRjhMnChVYhpQ" 
        />

        {/* Checkout Summary */}
        <CheckoutSummary />
      </div>
    </main>
  );
}