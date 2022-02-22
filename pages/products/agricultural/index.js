import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

import { Section, FlexBox, Button, Paragraph, Heading } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import AgriculturalMain from "assets/images/products/Agricultural-Main.jpeg";

const ProductsContainer = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Home = () => {
  const router = useRouter();

  return (
    <>
      <SEO title="Agricultural Products" />
      <Header title="Agricultural Products" image={AgriculturalMain} />
      <ProductsContainer>
        <Heading>Pest & Disease Control</Heading>
        <Paragraph>
          The most beneficial advantage of using pesticides is their
          effectiveness against pests that could easily destroy crops in their
          entirety, devastating whole fields at a time. By controlling insect
          and rodent populations, pesticides help prevent the spreading of
          diseases. Insecticides protect buildings from termite infestations. By
          eliminating predators that would destroy crops and raise the cost of
          corn and cotton, pesticides keep the price of clothing and food down.
          Pesticides are even put to use in operating rooms to clean and
          disinfect surgical instruments and other equipment to keep the rooms
          and materials sterile and free of bacteria and microbial life forms.
        </Paragraph>
        <FlexBox justify="center">
          <Button
            color="secondary"
            onClick={() => router.push("/products/agricultural/pest_disease")}
          >
            Read More
          </Button>
        </FlexBox>
        <Heading>Fertilizers & Plant Support</Heading>
        <Paragraph>
          Fertilizers are chemical or natural substances that are added to the
          land to increase its fertility. By fertilizing the soil, the plants
          are supplied the nutrients that they need to survive and thrive. By
          mixing fertilizers into your soil, your plants are more likely to grow
          more vigorously. Fertilizers function in two important ways. They
          supply the three big macronutrients (nitrogen, phosphorus, and
          potassium), three other macro-nutrients (calcium, magnesium, and
          sulfur), micro-nutrients (such as copper, iron, and zinc), and other
          agents (often fillers, which function in different ways) to the soil
          to add to and balance out the nutrients already present in the soil,
          that are often depleted after previous growing seasons of use. Some
          fertilizers also work to increase the effectiveness of the soil by
          improving its water retention capabilities and increasing aeration.
        </Paragraph>
        <FlexBox justify="center">
          <Button
            color="secondary"
            onClick={() =>
              router.push("/products/agricultural/fertilize_plant_support")
            }
          >
            Read More
          </Button>
        </FlexBox>
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
