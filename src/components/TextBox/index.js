import React from "react";

const TextBox = ({
  input,
  label,
  placeholder,
  //   meta: { touched, error, warning },
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
    />
    {/* <div>
      {touched &&
        ((error && <span className='font-italic text-danger'>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div> */}
  </div>
);

export default TextBox;
