import styled from "styled-components";
import Image from "next/dist/client/image";
import { Section, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import SeafoodHeader from "assets/images/products/Seafood.jpg";
import Seafood1 from "assets/images/products/Seafood-1.jpeg";
import Seafood2 from "assets/images/products/Seafood-2.jpeg";

const Container = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Home = () => {
  return (
    <>
      <SEO title="Seafood Products" />
      <Header title="Seafood Products" image={SeafoodHeader} />
      <Container>
        <Paragraph>
          The ocean is a generous supply of foods rich in vitamins and minerals.
          This is clear from the fact that more than 3.5 billion people depend
          on the seas and oceans as a primary source of food. worldwide, seafood
          is richer in protein compared to beef, and chicken... Welcome to
          Seafood Galore! We tailor to that authentic taste for the finest
          seafood cuisine there is out there... We specialize in providing the
          best quality seafood and we take pride in perfecting the art of that
          quintessential seafood Cuisine... Do you prefer eating fish rather
          than meat? Excellent! as a health conscious person, and your
          determination and committing to your diet regimen is exceptional. We
          can obtain a lot of essential nutrients from seafood dishes, besides
          the much needed protein for our bodies.
          <br />6 Health Benefits of Eating Seafood:
          <ul>
            <li>It's a Good Source of Essential Nutrients.</li>
            <li>It Helps With Your Eyesight.</li>
            <li>It Can Give You More Brain Power.</li>
            <li>It Promotes Heart Health.</li>
            <li>It Makes Skin and Hair Healthier.</li>
            <li>It Can Ease Joint Pain.</li>
          </ul>
          Recent Dietary Guidelines recommend eating 6 oz. of seafood per week,
          250 mg of omega-3 fatty acids EPA+DHA per day a shift towards healthy
          eating patterns, which include a variety of protein foods including
          more seafood. The general population should eat at least 6 ounces of
          seafood per week with the aim to take in at least 250 mg per day of
          omega-3 fatty acids EPA and DHA, and women who are pregnant or
          breastfeeding should eat at least 6 ounces of seafood per week for
          omega-3 fatty acid DHA to improve infant health outcomes.
        </Paragraph>
        <div style={{ display: "flex", gap: "50px" }}>
          <Image src={Seafood1} />
          <Image src={Seafood2} />
        </div>
        <img
          src={MidPageTrianglesRight.src}
          style={{
            position: "absolute",
            top: "-200px",
            right: 0,

            zIndex: -100,
          }}
        />
      </Container>
    </>
  );
};

export default Home;
