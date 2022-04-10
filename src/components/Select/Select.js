import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`

${'' /* Static properties */}
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 16px;
  border-radius: 8px;
  height: 43px;
  padding: 12px 52px 12px 16px;

  ${'' /* display: flex;
  flex-direction: row; */}

${'' /* Doesn't seem to do anything */}
  width: fit-content;

  &:hover {
    color: black;
    background-color: ${COLORS.transparentGray15};
  }


`



export default Select;
