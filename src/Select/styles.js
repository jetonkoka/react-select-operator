import styled from "styled-components";
import Select, { components } from "react-select";

const colour = {
  or: { backgroundColor: "#bcbec0", borderColor: "#bcbec0" },
  and: { backgroundColor: "#9bba46", borderColor: "#9bba46" },
  not: { backgroundColor: "#ba1c21", borderColor: "#ba1c21" }
};

export const Control = styled.div`
  ${({ boolean }) => colour[boolean]};
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  color: white;
  display: flex;
  justify-content: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GroupBadge = styled.span`
  background-color: #ebecf0;
  border-radius: 2em;
  color: #172b4d;
  display: inline-block;
  font-size: 12;
  font-weight: normal;
  line-height: 1;
  min-width: 1;
  padding: 0.167em 0.5em;
  text-align: center;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const ValueWrapper = styled.div`
  display: flex;
`;

export const Circle = styled.div`
  ${({ boolean }) => colour[boolean]};
  min-width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;
