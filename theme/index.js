import styled from "styled-components";
import BlueQuoteTriangle from "assets/images/utils/blue-quote.svg";
// import GreenQuoteTriangle from "assets/images/utils/blue-quote.svg";

export { Button } from "./components/Button";
export { FlexBox } from "./components/FlexBox";

export const Heading = styled.h2`
  :before {
    content: url(${BlueQuoteTriangle.src}); // Green to be added
  }

  font-size: ${({ theme }) => theme.fontlg};
  margin-bottom: 40px;
  /* @media only screen and (max-width: 600px) {
    margin-bottom: auto;
  } */
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
  font-weight: 300;
  line-height: 1.5;
`;

export const Section = styled.section`
  padding: 70px 150px;
  @media only screen and (max-width: 600px) {
    padding: 50px 50px;
  }
`;
