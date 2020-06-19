import React from "react";

const TextBox = ({
  input,
  label,
  placeholder,
  onChange,
  name,
  value,
  error,
}) => (
  <div className="txtBox-container">
    <div className="txtbox-name">
      <span>{label}</span>
      <span className="important">*</span>
    </div>
    <input
      {...input}
      placeholder={placeholder}
      type="text"
      className="txtbox"
      onChange={onChange}
      name={name}
      value={value}
    />
    <div className='error-container'>
      {error && <span className="font-italic text-danger">{error}</span>}
    </div>
  </div>
);

export default TextBox;
