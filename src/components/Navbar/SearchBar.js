import React from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Dropdown, Input, Select } from "semantic-ui-react";

const options = [
  { key: ".com", text: ".com", value: ".com" },
  { key: ".net", text: ".net", value: ".net" },
  { key: ".org", text: ".org", value: ".org" },
];

function SearchBar() {
  return (
    <Input type="text" placeholder="Search..." action>
      <input />
      <Select compact options={options} placeholder="Select Category" />
      <Button basic type="submit" icon>
        <FaSearch />
      </Button>
    </Input>
  );
}

export default SearchBar;
