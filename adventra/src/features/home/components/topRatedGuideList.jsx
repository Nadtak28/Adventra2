
const guides = [
  {
    name: "Ethan Carter",
    expertise: "Expert in historical tours",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqY56I3TScrTsoVM9Y1vWPAXzd7obBqwSLLt2mH4RybW_IoQgNiNU0x_Yux0vPEpWsabURfl7LB2U4lPWdE3KO_ikzl44NWunYr35L2JEFDnyXUtK2vYa-tmqMn2hlTc6Or61g3RYMf69TdxKgOXeKZAU1YKE_RcGJpu1_rhKphLfFGBMjpZN4vIUy-zNiP7N3dX3yVYvlTaJXMXwP8BVvClOdw-aDHmT1xaN0Dw0IKoI9pdmZ1LeWFicfkBxFYUP-rPDkTBKQgI ",
  },
  {
    name: "Olivia Bennett",
    expertise: "Specialist in culinary experiences",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6-36twYk4AsSPbA-lKqqshGGiJNwg8JpuC4E7cQtrOvN56d9aTjVFwIGAvYBy5mHuC7AkoGxANtKuI9tTVBCoKUZN-n3V2MSxFyvAc-HZvdcRbYUlbya0vIKqlbtpi4hIJM1qnHT2r2PBDYtf7KwLwr0R-hKqOTtKB1KWmANH-boWDz-NH5YkEOrfFeqfHJGfwSUyR-pnnwTh22MOEGtw0wPRPVsT-qL-rBtWdHRkxCXCxvWOwa0B1ildaUiPK6bbwiY5aGn14JY ",
  },
  {
    name: "Noah Thompson",
    expertise: "Adventure and outdoor guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYu8IRanemFN-JF8ystNhwcWKmknN4YM5-aJri8tAPbSIfc4_is9KuwC4xrhtam9oyS-AUZjuBHCr0Vq3wWVTHyJM2yIsMpukip1_T1AgM9rcBvhPPv5FHoSUuVz9HguhhQ_99HTw0EM3uOkD6rUzhPOsN2QBOupwIMG00lYwnBrl4D8a6gaGEm9U6GRBY_irZMVPw3LRLER_uDyOTw9S7TaPIoc4QS5feYTH-QLlLqfk4zO_bXkGE0N_U6dO577A08THZq6tFtM8 ",
  },
];

export default function TopRatedGuideList() {
  return (
    <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-8">
        {guides.map((guide, index) => (
          <div key={index} className="flex flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full self-center w-full"
              style={{ backgroundImage: `url(${guide.image})` }}
            ></div>
            <div>
              <p className="text-[#101918] text-base font-medium leading-normal">{guide.name}</p>
              <p className="text-[#578e85] text-sm font-normal leading-normal">{guide.expertise}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

