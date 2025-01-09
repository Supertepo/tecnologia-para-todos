import React, { useState } from 'react';

const OptionList = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (id) => {
    setSelectedOption(id);
    onSelect(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((option) => (
        <div key={option.id} className="flex flex-col items-center">
          <label htmlFor={option.id} class="text-center md:text-5xl text-6xl">
            <img className="size-60 md:size-64 mb-2" src={option.image} alt={option.label} />
          </label>
          <input
            type="radio"
            id={option.id}
            name="identification"
            checked={selectedOption === option.id}
            onChange={() => handleOptionChange(option.id)}
            class="mb-2 size-9"
          />
        </div>
      ))}
    </div>
  );
};

export default OptionList;
