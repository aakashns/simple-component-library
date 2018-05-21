import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText
}) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <small className="simple-form-text">{helpText}</small>}
  </div>
);

export default TextInput;
