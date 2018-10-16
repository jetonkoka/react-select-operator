import React from "react";
import Select, { components } from "react-select";

import { Circle, colour } from "./styles";

const operators = [
  { value: "or", label: "OR" },
  { value: "and", label: "AND" },
  { value: "not", label: "NOT" }
];

const styles = {
  control: (base, state) => ({
    ...colour[state.getValue()[0].value],
    borderRadius: "10px",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "white",
    display: "flex",
    display: "flex",
    fontSize: "10px",
    height: "23px",
    justifyContent: "center",
    overflow: "visible",
    width: 70
  }),

  singleValue: base => ({
    ...base,
    color: "white"
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#cccccc" : "transparent",
    color: "black",
    display: "flex",
    fontSize: "10px",
    paddingLeft: "7px"
  }),

  dropdownIndicator: base => ({
    ...base,
    color: "white"
  })
};

const SingleValue = ({ data: { label }, ...props }) => (
  <components.SingleValue {...props}>{label}</components.SingleValue>
);

const Option = props => (
  <components.Option {...props}>
    <Circle boolean={props.value} />
    {props.label}
  </components.Option>
);

const IndicatorSeparator = false;

export default props => (
  <Select
    defaultValue={operators[0]}
    components={{ SingleValue, IndicatorSeparator, Option }}
    isClearable={false}
    isSearchable={false}
    options={operators}
    styles={styles}
    {...props}
  />
);
