import React from "react";

const Dropdown = ({ label, name, defaultValue, options, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <select name={name} defaultValue={defaultValue} onChange={onChange}>
                {options
                    ? options.map((option) => (
                          <option key={option.id} value={option.id}>
                              {option.name}
                          </option>
                      ))
                    : null}
            </select>
        </div>
    );
};

export default Dropdown;
