import styled from "styled-components";

export const colour = {
  OR: { backgroundColor: "#bcbec0", borderColor: "#bcbec0" },
  AND: { backgroundColor: "#9bba46", borderColor: "#9bba46" },
  NOT: { backgroundColor: "#ba1c21", borderColor: "#ba1c21" }
};

export const Group = styled.div`
  align-items: center;
  display: flex;
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

export const ValueWrapper = styled.div`
  display: flex;
`;

export const Checkbox = styled.input`
  margin-right: 20px;
`;

export const Circle = styled.div`
  ${({ boolean }) => colour[boolean]};
  border-radius: 50%;
  height: 10px;
  margin-right: 5px;
  min-width: 10px;
`;
