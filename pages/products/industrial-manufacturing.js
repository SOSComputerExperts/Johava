import styled from "styled-components";

import { Section, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import IndustrialManufacturing from "assets/images/products/Industrial-Manufacturing.jpeg";

const ProductsContainer = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Home = () => {
  return (
    <>
      <SEO title="Industrial Manufacturing" />
      <Header
        title="Industrial Manufacturing"
        image={IndustrialManufacturing}
      />
      <ProductsContainer>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}
        <Inner>
          <Paragraph>
            Johava Enterprise Inc. is a premium global supplier of turn-key
            manufacturing solutions & services for optical fibers & fiber optic
            cables. Through our advanced production equipment and expert
            knowledge of Process, Extrusion, and SZ-Stranding, which are
            specific to Optical Cables, we provide the following services:
            Fabrication of High Purity Optical Glass Drawing and Proof testing
            of Optical Fibers Application of UV-Curable Acrylates on Fibers With
            top of the notch connectivity solutions, comes in all major
            tele-communication solutions as well. Johava Enterprise Inc.
            responds to the needs or our clients with solutions that deliver the
            power of Voice, Data and Video to users wherever and whenever they
            need it, with the expertise to see the job through from start to
            finish. Through our unique relationships with premiere vendors, we
            can be your 1 vendor for elecommunications, computer networks, voice
            & data cabling and video solutions.
          </Paragraph>
        </Inner>

        <img
          src={MidPageTrianglesRight.src}
          style={{
            position: "absolute",
            top: "-200px",
            right: 0,

            zIndex: -100,
          }}
        />
      </ProductsContainer>
    </>
  );
};

export default Home;
