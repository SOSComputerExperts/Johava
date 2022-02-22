import styled from "styled-components";
import Image from "next/image";
import { Section, Paragraph } from "theme";

import SEO from "components/SEO";
import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import AboutHeader from "assets/images/About.jpeg";
import Map from "assets/images/Map.jpg";

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
      <SEO title="About Us" />
      <Header title="About Us" image={AboutHeader} />
      <ProductsContainer>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}
        <Inner>
          <Paragraph>
            Johava Enterprise Inc. was being established in 2012 and is now a
            leading solutions provider, sourcing and trade consulting company.
            We have functioned as a bridge between the North American and Asian
            markets and have been involved in sourcing and distribution of a
            variety of products and technologies into the Asian and Middle
            Eastern markets. Using our vast network of business contacts and
            distribution channels, we have successfully identified market
            opportunities, and sourced solutions from North American markets.
            Our team of experts with over 40 years of combined experience have a
            proven track record when brokering excess inventory in an expedient
            and cost effective manner. Your company will benefit from Johava's
            resources and time tested ability to locate and entice potential
            buyers. Our dedicated resources will provide you with realistic,
            measurable results. We are doing business with more than 12
            countries worldwide and are constantly trying to expand.
          </Paragraph>
          <Image src={Map} alt="Map" />
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
