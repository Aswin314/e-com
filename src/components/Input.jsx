import React from "react";

const Input = ({ Handlechange, value, title, name, color }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input onChange={Handlechange} value={value} type="radio" name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </div>
  );
};

export default Input;
