import CheckboxItem from './checkBoxItem';

function WhatIncluded() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h3 className="text-[#0e1a18] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        What's included
      </h3>
      <div className="px-4">
        <CheckboxItem id="bike-rental" label="Bike rental" />
        <CheckboxItem id="helmet" label="Helmet" />
        <CheckboxItem id="guided-tour" label="Guided tour" />
      </div>
    </div>
  );
}

export default WhatIncluded;