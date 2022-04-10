/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = (props) => {
  return (
    <StyleWrapper {...props}>
      <ProgressIndicator {...props} />
    </StyleWrapper>
  );
};

const ProgressIndicator = (props) => {
  return <div className="progress" {...props} />;
};

const heightConverter = (size) => {
  switch (size) {
    case "small":
      return "8px";
    case "medium":
      return "12px";
    case "large":
      return "24px;";
  }
};

const StyleWrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  ariaValuenow: props.value,
  ariaValuemin: 0,
  ariaValuemax: 100,
  ariaLabel: "progress bar",
}))`
  ${"" /* Center the progress indicator */}
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${COLORS.transparentGray15};
  padding: ${(props) => (props.size === "large" ? "2px 4px" : "0px")};
  height: ${(props) => heightConverter(props.size)};
  width: 370px;
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  .progress {
    background-color: ${COLORS.primary};
    width: ${(props) => props.value}%;
    height: ${(props) => (props.size === "large" ? "16px" : "inherit")};
    border-radius: ${(props) => borderRadiusConverter(props.value)};
  }
`;

const borderRadiusConverter = (value) => {
  if (value < 98) {
    return "4px 0px 0px 4px";
  } else if (value >= 98 && value < 100) {
    return "4px 2px 2px 4px";
  } else {
    return "4px";
  }
};

export default ProgressBar;
