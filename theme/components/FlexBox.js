import styled from "styled-components";

export const FlexBox = styled.div`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  justify-content: ${({ justify }) => justify};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};
  flex: ${({ flex }) => flex};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

FlexBox.defaultProps = {
  justify: "initial",
  alignContent: "initial",
  alignItems: "initial",
  direction: "row",
  wrap: "nowrap",
  flex: "unset",
};
