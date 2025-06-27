function CheckboxItem({ id, label, defaultChecked = true }) {
  return (
    <label htmlFor={id} className="flex gap-x-3 py-3 flex-row">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        className="h-5 w-5 rounded border-[#d1e6e2] border-2 bg-transparent text-[#53e3cb] checked:bg-[#53e3cb] checked:border-[#53e3cb] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6e2] focus:outline-none"
      />
      <p className="text-[#0e1a18] text-base font-normal leading-normal">{label}</p>
    </label>
  );
}

export default CheckboxItem;