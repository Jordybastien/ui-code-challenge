import React from "react";

const TextArea = ({
  input,
  label,
  placeholder,
  type,
  onChange,
  name,
  value,
  error,
}) => (
  <div className="txtBox-container tx-area">
    <div className="txtbox-name">
      <span>{label}</span>
      <span className="important">*</span>
    </div>
    <textarea
      {...input}
      placeholder={placeholder}
      type={type}
      className="txt-area"
      rows="5"
      onChange={onChange}
      name={name}
      value={value}
    />

    <div className="error-container">
      {error && <span className="font-italic text-danger">{error}</span>}
    </div>
  </div>
);

export default TextArea;
