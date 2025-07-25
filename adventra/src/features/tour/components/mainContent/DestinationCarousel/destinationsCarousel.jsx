import DestinationCard from './destinationCard';

function DestinationsCarousel() {
  const destinations = [
    {
      city: 'Paris',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCbnGq5oUpwuVp3YoXfJSMHfJg94Esj4Ck845VPE4jqxeG0RS-0XfHFfJsWPSG-lbj82wq4YS4G2aA5IsArmtqdSZUqOruOEFAz8deOdk9_p5FXkphqBfFLaq3yvAaBmg9Ny2ujBD4Zpvkzb2T43B6UXMCvaAxMkDMoU1nyYsD1MgsuKrjSJNJw9xHEnxGWoz_qB4fodaSmT6nZ1mZPIqfJ_XCfNhWcbSjC9qduNBgRA6kJZbvqjA3I7Zi7j1njbGv_33Vtz_BmjNc', 
    },
    {
      city: 'Rome',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTs2YXJzmRarbLBsUIgyopWf2RVLzs6LQlAiDa4oEM8NVPPXjmZ9jDaUeA4Po6xD8b1bH4KEDtoA2Mqr9CnYwPzE0B8k8oYtghV-gTpEaXw-lBlJ3p0d9zKJupMcwLD_c7mVx0HPSY0WQhW-Z_7_JwYZWubb55ywA7x_E8AuchA4jXF72_HRCldTMq6GZsnkySQi66GdauzzG3WUm7RX5SsYExJ0znYqIeTEsa3AZPDcsDFe5962azceDsp5ow9YSgSCxwk7DFev0', 
    },
    {
      city: 'Berlin',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4GjY1q6Va0-S0FZQCBmyye2YWJ_01bAzBwE-FlaXCDYUNSlKu9ed_U_yzZVYoYSuBstJsBQgo1RIALvr8r-DZhd-iEolZFUHNIPltWjkzXNIw0W36BmUK4FGxwOgs5R6Hk2uKROTtnH8u6ocafaUCDQ5y-OGYwMwKyKfTI3n0-Uy-_o1codEY_xll494wbWzGNZWUnQMtwE7nDqH1qjrbugGETzEOdgvbN6OcmAvZ0aDShkObSYiq4nCUHBt6p_YY1yfP-Q55x5w', 
    },
    {
      city: 'Vienna',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAR2Latj7BAFLy6Gwp2lKWkCJXahS9GVxgyWjQ_I7H6p9x6O1RUbybJwI9Ynl2W-oNaR5eFs_DoZNUJm-uLwvFYnLvg77QPQfLyz7RTWOgXMoM7OsEUAKCEuR7B34tpjcqszUwHmlndkFZYP0zORToBL3OXqHZzXBuU2c1CNo_a7lbL9C8WeFJ1xhZNaaFUA5bN_dlS0Tq9O4dSHvOr9mSfxoVO_yJjWbFVYzQ5eSp5Vt9hPUuLumvC91NitihL0seiDkf7W_OmmUQ', 
    },
    {
      city: 'Prague',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBgc8cst0nDQvas6HyFb0HNbvR6FMSHT1aHmJy2AY23H22fnsd82aVrkl4BaMxuzoPaRPHsq_jtc_W9vsbbCL1fTLD67ceziU8UroZAdzhCbVtl4nyMkI-rLVnh8YBIuL-EPGT5X3HXTvdhYCoH3egDuKhiVUjdnnuI0QR4MIEUVTwhOVxdLV2uxA0lYMWATOKE7M9l5KGUEV3ls_4-xqrsaZFqEHZxqGOJH_UK3NlIsqusjfzV9GRZMleG8KkRLG3-QNhiWEx5lxc', 
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Destinations</h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} city={dest.city} imageUrl={dest.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationsCarousel;