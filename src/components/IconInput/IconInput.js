import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper width={width}>
      <Icon id={icon} size={size === "large" ? "24px" : "12px"} />
      <input placeholder={placeholder} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: solid 2px black;
  width: 271px;
  padding-bottom: 7px;

  ${'' /* Got tired of fiddling with this tbh. */}

  svg {
    ${"" /* position: absolute;
    top: 10px;
    left: 10px; */}
  }

  .icon {
    ${"" /* position: absolute;
    left: 5px;
    bottom: 0;
    margin: 0; */}
    max-width: 24px;
  }

  input {
    ${"" /* position: relative;
    left: 20px;
    bottom: 0; */}
    font-size: 18px;

    width: 100%;

    border: none;
    outline: none;

    color: ${COLORS.gray700};
  }

  input::placeholder {
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
