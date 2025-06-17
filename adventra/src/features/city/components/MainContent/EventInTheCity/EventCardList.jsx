import EventCard from "./EventCard";
export default function EventCardList() {
  const events = [
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtTM6fCSPoo2g8rc4m271xndBC0X20ts5xTMb83B0InR0tdBXeIGm1i2PQiBIxwDcY0KWGig9zNBuEL3y3UlA_JfCYIh8sxYLpvykK680KkhutAcCbuFmLjoj2ZbowTjQVdzOmX_fK3o_HLXgnDGD7RLlkTIHYWBMrV6l_nTm1k2HYI55rNnClRBCU0CIj4A8oRysBe5oLSrtPEcyVZrwsq4QCOFAijd20Dv4t6UT6MeARpPjgklCrWWEU8pUxs2np-VdkhWIW2J4', 
      title: 'Music Festival',
      description: 'Live music performances',
    },
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCtmxD46vM8i26Bg892-hiaf_zJgcFXc_UGAygsOs5oomupxLimKyPMn3zNuiTwGBsujBX1qggJOh-migO6Hz70KELS-WSVJymIia7Ra2iRAbf-csfqcA2GkyXB1v5OhHjYMBzozKs4wkw04PLZiSAxh95E3hucgyIURx2_xFFz4V-8Ushl3mI_DOp1vSQ1mTL4BSioIy_cHepZYAzht0F5lvBfcUV7GVGYnqT5EFJMvXevybpF4mWMTsrvjBdch1tfjraTeVD5gRY', 
      title: 'Cultural Festival',
      description: 'Celebration of local traditions',
    },
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBi0Sbl9GIMQGPFHNR9b0OF_nMRZMYtdzxZ_yZzODR71-BIMW8ihIJHadKiTfe7ZegJR1-MauVbD0gZI_SOSBOuThKUMNYiVM76q09hJ_mK8LyadVCMoyNbQDw1CWR-bxQNZWfcTqvQvs8EXoFGDrnt_JdGmSuSI97KQd0UENqQblKdkOFTX7Sefl0kg2c7TScMpberQ8DKxmTar71n60FMEJYZbBNJg0Cc9myzREwsNIez6hj-TiKLh9-9Bwho8c5NMOIIvD6qfQ8', 
      title: 'Art Exhibition',
      description: 'Showcasing contemporary art',
    },
  ];

  return (
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}