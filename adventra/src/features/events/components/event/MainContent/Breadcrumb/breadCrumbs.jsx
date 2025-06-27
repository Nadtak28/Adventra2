function Breadcrumbs({ city, category }) {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <a href="#" className="text-[#519489] text-base font-medium">{city}</a>
      <span className="text-[#519489] text-base font-medium">/</span>
      <span className="text-[#519489] text-base font-medium">{category}</span>
      <span className="text-[#0e1a18] text-base font-medium">Experiences</span>
    </div>
  );
}

export default Breadcrumbs;
