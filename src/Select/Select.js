import React, { Component } from "react";
import AsyncSelect, { components } from "react-select";

import Booleans from "./Booleans";
import {
  Group,
  GroupBadge,
  Checkbox,
  ValueWrapper as VWrapper
} from "./styles";

const formatGroupLabel = ({ description, options }) => (
  <Group>
    <span>{description}</span>
    <GroupBadge>{options.length}</GroupBadge>
  </Group>
);

const IndicatorSeparator = false;

const styles = {
  valueContainer: base => ({
    ...base,
    overflow: "visible"
  }),
  control: base => ({ ...base, borderColor: "black" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#cccccc" : "transparent",
    borderBottom: "solid 1px #f0f0f1",
    color: "black",
    overflow: "hidden",
    padding: "14px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: "transparent",
    border: "1px solid rgb(48, 86, 121)",
    borderRadius: "5px"
  })
};

export default class extends Component {
  onChangeBoolean = bl => ({ data, selectProps }) =>
    this.setValue(
      selectProps.value.map(
        opt =>
          opt.value === data.value
            ? {
                ...data,
                operator: bl.value
              }
            : opt
      )
    );

  onClickOption = ({ value, hasValue, setValue, getValue }) => {
    this.setValue = setValue;
    setValue([
      ...getValue(),
      {
        num: value,
        operator: hasValue ? "OR" : null,
        value: value
      }
    ]);
  };

  ValueWrapper = props => {
    props.selectProps.value &&
      props.selectProps.value[0] &&
      props.selectProps.value[0].operator &&
      (props.selectProps.value[0].operator = null);

    return (
      <VWrapper>
        {props.data.operator && (
          <Booleans onChange={e => this.onChangeBoolean(e)(props)} {...props} />
        )}
        <components.MultiValueContainer {...props} />
      </VWrapper>
    );
  };

  CustomOption = ({
    data: { info },
    innerProps: { onMouseOver, onClick },
    ...props
  }) => (
    <components.Option {...props} innerProps={{ onMouseOver }}>
      <Checkbox
        checked={props.isSelected}
        onChange={() =>
          props.isSelected ? onClick() : this.onClickOption(props)
        }
        type="checkbox"
      />
      <strong>{props.value}</strong> - {info}
    </components.Option>
  );

  render() {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          closeMenuOnSelect={false}
          components={{
            IndicatorSeparator,
            MultiValueContainer: this.ValueWrapper,
            Option: this.CustomOption
          }}
          formatGroupLabel={formatGroupLabel}
          getOptionLabel={option => option.num}
          getOptionValue={option => option.num}
          hideSelectedOptions={false}
          isMulti
          onKeyDown={e => e.keyCode === 13 && e.preventDefault()}
          styles={styles}
          {...this.props}
        />
      </div>
    );
  }
}
