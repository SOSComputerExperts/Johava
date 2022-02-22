import styled from "styled-components";

import Fade from "react-reveal/Fade";

import { FlexBox } from "theme";
import BigGreenTriangle from "assets/images/utils/big-green-triangle.svg";
import SmallBlueTriangle from "assets/images/utils/small-blue-triangle.svg";

const Main = styled(FlexBox)`
  position: relative;
  padding: 100px 150px;
  @media only screen and (max-width: 600px) {
    padding: 100px 0px;
  }
  background-color: ${({ theme }) => theme.colors.dark.grey};
  color: ${({ theme }) => theme.colors.white};
`;

const Section = styled.div`
  text-align: center;
  width: 30%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const CopyRights = styled.div`
  font-weight: 300;
  margin: 20px 0px;
  text-align: center;
`;

const LogoPH = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontxl};
`;

const SamllBlueTriangle = styled.img`
  position: absolute;
  bottom: -40px;
  left: 10vw;
  @media only screen and (max-width: 600px) {
    bottom: 0px;
  }
`;
const Footer = () => {
  return (
    <>
      <Main justify="center" alignItems="center">
        <img
          src={BigGreenTriangle.src}
          style={{
            position: "absolute",
            top: -40,
            right: "25vw",
            transform: "scale(0.7)",
          }}
        />

        <SamllBlueTriangle src={SmallBlueTriangle.src} />
        <Section>
          <h2>Location</h2>
          <div>
            <p>4445 West 10th Ave</p>
            <p>Vancouver BC Canada</p>
            <p>V6R2H8</p>
          </div>
        </Section>
        <Section>
          <h2>Connect</h2>
          <div>
            {/* <p>+1 604 986 1030</p> */}
            <p>+1 604 428 0588</p>
            <p>info@johava.com</p>
          </div>
        </Section>
        <Section>
          <LogoPH>Johava Enterprise</LogoPH>
        </Section>
      </Main>
      <CopyRights>@2021 SOS COMPUTER EXPERTS</CopyRights>
    </>
  );
};

export default Footer;
