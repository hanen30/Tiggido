import React from "react";

const Input = ({ name, label,className, classNameI,classNameL, error, ...rest }) => {
  return (
    <div className={className } >
      <label className={classNameL} htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} placeholder = {name} className={classNameI} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
