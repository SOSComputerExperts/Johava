import styled from "styled-components";
import { Section, Paragraph } from "theme";

import SEO from "components/SEO";
import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import ContactsHeader from "assets/images/Contacts.jpeg";

const ProductsContainer = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Home = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <Header title="Contact Us" image={ContactsHeader} />
      <ProductsContainer>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}

        <Paragraph>4445 West 10th Ave, Vancouver, BC V6R2H8</Paragraph>

        <Paragraph>+1 604 428 0588</Paragraph>

        <Paragraph>info@johava.com</Paragraph>

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
