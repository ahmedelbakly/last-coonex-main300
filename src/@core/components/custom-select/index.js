import React from "react";
import styleSheet from "./styles.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const CustomSelect = ({ array, fun, state, label, selectName,object }) => {

  const [showDropdown, setShowDropdown] = useState(false);

  //* handle show dropdown option */
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  //** handle select option value  */
  const handleSelectOption = (value) => {
    fun(value, selectName,object);
    setShowDropdown(false);
  };

  return (
    <div className={styleSheet.container}>
      {label && <p className={styleSheet.label}>{label}</p>}
      <div
        className={styleSheet.select}
        onClick={handleShowDropdown}
        style={{ borderRadius: showDropdown ? "8px 8px 0px 0px" : "8px" }}
      >
        <p
        style={{
          textTransform:"capitalize",
          color:!state  ?"black":"#1DB2FF"
        }}

        >{state ? state : "Select option"}</p>
        <RiArrowDropDownLine fontSize={"30px"} />
      </div>
      <ul className={showDropdown ? styleSheet.listActive : styleSheet.list}>
        {array.map(({ name, value }, index) => (
          <li
            key={index}
            className={styleSheet.option}
            onClick={() => handleSelectOption(value)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
