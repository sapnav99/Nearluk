
import React, { useState } from 'react';
import './MultiselectDropdown.css';

interface Option {
  value: string;
  label: string;
}

interface MultiselectDropdownProps {
  options: Option[];
}

const MultiselectDropdown: React.FC<MultiselectDropdownProps> = ({ options }) => {
    
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  
  const optionsToRender = options || [];

  return (
    <div className="multiselect-dropdown">
      <div className="selected-options">
        {selectedOptions.map((value) => (
          <div key={value} className="selected-option">
            {value}
            <span onClick={() => toggleOption(value)}>×</span>
          </div>
        ))}
      </div>
      <div className="multidropdown">
        
        <div className="multidropdown-content">
          {optionsToRender.map((option) => (
            <div
              key={option.label}
              className={`multidropdown-option ${selectedOptions.includes(option.label) ? 'selected' : ''}`}
              onClick={() => toggleOption(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiselectDropdown;
