import React from "react";
import Select from "../Select";

const Dropdown = ({ list, onChange }) => {
  return (
    <Select
      borderRadius="5px"
      paddingX="5px"
      paddingY="10px"
      onChange={onChange}
      backgroundColor="transparent"
    >
      <option value="">Select a language</option>
      {list.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

// TODO a bare minimum select dropdown for the current use-case.
export default Dropdown;
