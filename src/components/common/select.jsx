import React from "react";

const Select = ({ name, label,className,classNameS, options, error, ...rest }) => {

  return (
    <div className={className}>
      
      <select name={name} id={name} {...rest} className={classNameS}>
        {options.map(option => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
