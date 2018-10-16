import React from "react";
import Select, { components } from "react-select";

import { Control as ControlStyled } from "./styles";

const operators = [
  { value: "OR", label: "⚪ OR" },
  { value: "AND", label: "🔵 AND" },
  { value: "NOT", label: "🔴 NOT" }
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
  })
};

const Control = props => (
  <ControlStyled boolean={props.getValue()[0].value}>
    <components.Control {...props} />
  </ControlStyled>
);

const SingleValue = ({ data: { value }, ...props }) => (
  <components.SingleValue {...props}>{value}</components.SingleValue>
);

const IndicatorSeparator = false;

export default props => (
  <Select
    defaultValue={operators[0]}
    components={{ SingleValue, IndicatorSeparator, Control }}
    isClearable={false}
    isSearchable={false}
    options={operators}
    styles={styles}
    {...props}
  />
);
