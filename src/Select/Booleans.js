import React from "react";
import Select, { components } from "react-select";

import { Control as ControlStyled, Circle } from "./styles";

const operators = [
  { value: "or", label: "OR" },
  { value: "and", label: "AND" },
  { value: "not", label: "NOT" }
];

const styles = {
  control: () => ({
    display: "flex",
    fontSize: "10px",
    height: "23px",
    overflow: "visible",
    width: 70
  }),
  singleValue: base => ({
    ...base,
    color: "white"
  }),
  option: base => ({
    ...base,
    fontSize: "10px"
  }),
  dropdownIndicator: base => ({
    ...base,
    color: "white"
  }),
  option: base => ({
    ...base,
    display: "flex",
    paddingLeft: "7px"
  })
};

const Control = props => (
  <ControlStyled boolean={props.getValue()[0].value}>
    <components.Control {...props} />
  </ControlStyled>
);

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
    components={{ SingleValue, IndicatorSeparator, Control, Option }}
    isClearable={false}
    isSearchable={false}
    options={operators}
    styles={styles}
    {...props}
  />
);
