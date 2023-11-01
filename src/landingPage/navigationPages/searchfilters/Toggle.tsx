import React from 'react';
import './Toggle.css'
interface ToggleSwitchProps {
  Name: string;
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ Name, onChange }) => {
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(checked);
  };

    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={Name}
          id={Name}
          onChange={handleToggleChange}
        />
        <label className="toggle-switch-label" htmlFor={Name}>
          
          <span className="toggle-switch-inner" data-name={Name} />
          
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  };
  

export default ToggleSwitch;
