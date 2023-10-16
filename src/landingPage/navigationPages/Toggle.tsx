import React from 'react';
import './Toggle.css'
interface ToggleSwitchProps {
  Name: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ Name }) => {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={Name}
          id={Name}
        />
        <label className="toggle-switch-label" htmlFor={Name}>
          
          <span className="toggle-switch-inner" data-name={Name} />
          
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  };
  

export default ToggleSwitch;
