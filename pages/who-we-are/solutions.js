import styled from "styled-components";

import { Section, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import Solutions from "assets/images/Solutions.jpeg";

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
      <SEO title="Solutions" />
      <Header title="Solutions" image={Solutions} />
      <ProductsContainer>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}
        <Inner>
          <Paragraph>
            Johava Enterprise Inc. solutions have earned the loyalty of clients
            through our dedicated business. We make it our priority to know each
            client's business and anticipate their needs. Johava Enterprise Inc.
            responds to the needs of our clients with solutions that deliver the
            right product to users wherever and whenever they need it, with the
            expertise to see the job through from start to finish. Through our
            unique relationships with premiere vendors, we can be your 1 vendor
            for all of your agricultural product needs.
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
