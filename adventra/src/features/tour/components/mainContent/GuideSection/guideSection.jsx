import GuideCard from './guideCard';

function GuideSection() {
  const guide = {
    name: 'Sophia Williams',
    role: 'Expert Tour Guide',
    bio: 'Sophia has been leading tours across Europe for over 10 years, sharing her passion for history and culture with travelers from around the globe.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIgqq9WtOTysjp-NIBAexqdKi2vQWnJr9gwzI_LQSiZa4xB31FiFe_4G4Ro-4Wu3eYbODlagO13o1JVKme-FpfeKUUE_xReIL1Ncdc1590vs_gC_TgulCYMiSnNjRtmasDChlfcIn_CbKHUsbMqeeprv1MZN9dRUEPYVbTy8JAs8YJxuWCvbWcfhuQWSRhsuUr7mTkAF3tyfpoBi24Icd8wNnx74HKdddA46PtONSmcWTmUSGZkpTmUBrU6-xfdOpNMgqW2RPHD8U', 
  };

  return (
    <section className="mt-10 px-4">
      <h2 className="text-[#101918] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Your Guide</h2>
      <GuideCard {...guide} />
    </section>
  );
}

export default GuideSection;