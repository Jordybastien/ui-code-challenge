import React from "react";

const TextArea = ({
  input,
  label,
  placeholder,
  type,
  //   meta: { touched, error, warning },
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
    />

    {/* <div>
      {touched &&
        ((error && <span className="font-italic text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div> */}
  </div>
);

export default TextArea;
