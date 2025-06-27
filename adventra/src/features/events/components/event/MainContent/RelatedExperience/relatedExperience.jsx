import ExperienceCard from './ExperienceCard';

function RelatedExperiences() {
  const experiences = [
    {
      imageSrc: "https://picsum.photos/id/1064/300/400",  
      title: "Golden Gate Bridge Walking Tour",
      description: "Explore the bridge on foot",
    },
    {
      imageSrc: "https://picsum.photos/id/1016/300/400", 
      title: "Alcatraz Island Ferry",
      description: "Visit historic Alcatraz",
    },
    {
      imageSrc: "https://picsum.photos/id/1011/300/400", 
      title: "Lombard Street Exploration",
      description: "Discover the crookedest street",
    },
  ];

  return (
    <section className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4">
      <h3 className="text-[#0e1a18] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Related experiences
      </h3>

      <div className="flex overflow-x-auto scrollbar-hide p-4 gap-3">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            imageSrc={exp.imageSrc}
            title={exp.title}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}

export default RelatedExperiences;