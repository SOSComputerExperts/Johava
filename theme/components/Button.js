import styled from "styled-components";

export const Button = styled.a`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ small }) => (small ? "10px 20px" : "20px 50px")};
  font-size: ${({ theme }) => theme.fontBody};
  font-weight: bold;
  text-align: center;
  width: 250px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.1);
  }
`;

Button.defaultProps = {
  color: "primary",
};
