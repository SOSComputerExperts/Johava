import styled from "styled-components";
import Image from "next/image";
import { Section, Paragraph, Heading } from "theme";

import SEO from "components/SEO";
import Header from "components/Header";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import ProjectsHeader from "assets/images/Projects.jpg";
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
      <SEO title="Projects" />
      <Header title="Recent Projects" image={ProjectsHeader} />
      <ProductsContainer>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}
        <Inner>
          <Heading>Titanium Dioxide</Heading>
          <Paragraph>
            Titanium Dioxide also know as Titania is a naturally occurring
            substance noteworthy for its wide range of applications, from paint
            to sunscreen to food colouring. The most important function of
            titanium dioxide however is in powder form as a pigment for
            providing whiteness and opacity to such products such as paints and
            coatings (including glazes and enamels), plastics, paper, inks,
            fibres and food and cosmetics. Titanium dioxide is by far the most
            widely used white pigment. Titania is very white and has a very high
            refractive index. The high refractive index and bright white colour
            of titanium dioxide make it an effective opacifier for pigments. The
            material is used as an opacifier in glass and porcelain enamels,
            cosmetics, sunscreens, paper, and paints. One of the major
            advantages of the material for exposed applications is its
            resistance to discoloration under UV light.
          </Paragraph>
        </Inner>

        <Inner>
          <Heading>Iron Chelate</Heading>
          <Paragraph>
            An organic agricultural substance that holds micronutrients in a
            form available for absorption by plants that is often added to
            alkaline soils. Chelated iron is simply iron that has undergone
            chelation, a chemical process that firmly binds the iron molecule to
            another substance, usually an amino acid. This forms a more stable
            ring-shaped molecule that is easier for plants and animals to
            absorb. Iron from dietary sources is bound to amino acids naturally,
            and chelation attempts to make supplemental iron more similar to
            these naturally occurring sources. Cells have membranes which allow
            some substances to pass through, while blocking others. Chelated
            iron, disguised as amino acids, is thought to pass through the cell
            membrane more easily, allowing the iron inside the cell where it is
            needed.
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
