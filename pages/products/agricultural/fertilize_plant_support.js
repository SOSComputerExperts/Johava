import styled from "styled-components";

import { Section, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";
import Product from "components/Product";

// import Fade from "react-reveal/Fade";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import PlantsHeader from "assets/images/products/Fertilizers.jpeg";
import FertilizeMidPage from "assets/images/products/Fertilize-midpage-pic.jpeg";

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

const DescWithPic = styled.div`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <>
      <SEO title="Fertilizers & Plant Support" />
      <Header title="Fertilizers & Plant Support" image={PlantsHeader} />
      <ProductsContainer>
        <DescWithPic>
          <Paragraph>
            Fertilizers are chemical or natural substances that are added to the
            land to increase its fertility. By fertilizing the soil, the plants
            are supplied the nutrients that they need to survive and thrive. By
            mixing fertilizers into your soil, your plants are more likely to
            grow more vigorously. Fertilizers function in two important ways.
            They supply the three big macronutrients (nitrogen, phosphorus, and
            potassium), three other macro-nutrients (calcium, magnesium, and
            sulfur), micro-nutrients (such as copper, iron, and zinc), and other
            agents (often fillers, which function in different ways) to the soil
            to add to and balance out the nutrients already present in the soil,
            that are often depleted after previous growing seasons of use. Some
            fertilizers also work to increase the effectiveness of the soil by
            improving its water retention capabilities and increasing aeration.
          </Paragraph>
          <img src={FertilizeMidPage.src} />
        </DescWithPic>

        <Paragraph>
          Fertilizer comes in many forms both all-natural and synthetic. Some
          fertilizers are chemically based, while others are derived from
          all-natural ingredients, such as dead leaves and old grass clippings.
          By offering vital nutrients like nitrogen to the soil, fertilizers
          help plants thrive despite the threat of disease or sharing their
          resources with invasive weeds. Organic fertilizers like compost and
          manure improve the quality of the soil by feeding the microorganisms
          that dwell within it. Feeding the soil’s microorganisms helps to
          reduce erosion and keep the soil aerated and hydrated. Cut grass
          clippings, scattered on the lawn, is another form of fertilizer that
          provides valuable phosphorus, potassium, and nitrogen and all you have
          to do to get it is mow your lawn.
        </Paragraph>
        {/* <Heading>Fertilizers & Plant Support</Heading> */}
        <Inner>
          <Product
            title="EDDHA FE6% (Orto-Orto 50%)"
            text={
              <div>
                1. Necessary component of many plant enzymes.
                <br />
                2. Occurs in chloroplasts where it participates in the
                photosynthesis and metabolism of N and S.
                <br />
                3. Involved in the synthesis of chlorophyll.
                <p style={{ margin: "50px 0px" }}></p>
                <table
                  border="1"
                  bordercolor="ffffff"
                  cellpadding="0"
                  cellspacing="0"
                  width="463"
                >
                  <tbody>
                    <tr>
                      <td align="right" height="21" width="45%">
                        Appearance:&nbsp;&nbsp;
                      </td>
                      <td height="21" width="52%">
                        &nbsp;&nbsp;Dark brown micro-granules
                      </td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Molecular Formula:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;C18H16O6N2NaFe</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Fe content:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;6.0%</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        PH value:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;7-9</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        o-o content:&nbsp;&nbsp;
                      </td>
                      <td height="21">
                        &nbsp;&nbsp;o-o 2.0%, 3.0%, 4.2%, 4.8%
                      </td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Fertilizer category:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;Micronutrient</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Effective PH range:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp; 4-11</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Low heavy metal content:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;100% water soluble.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
          <Product
            title="EDDHA FE6% (Orto-Orto 30%)"
            text={
              <div>
                1. Necessary component of many plant enzymes.
                <br />
                2. Occurs in chloroplasts where it participates in the
                photosynthesis and metabolism of N and S.
                <br />
                3. Involved in the synthesis of chlorophyll.
                <p style={{ margin: "50px 0px" }}></p>
                <table
                  border="1"
                  bordercolor="ffffff"
                  cellpadding="0"
                  cellspacing="0"
                  width="463"
                >
                  <tbody>
                    <tr>
                      <td align="right" height="21" width="45%">
                        Appearance:&nbsp;&nbsp;
                      </td>
                      <td height="21" width="52%">
                        &nbsp;&nbsp;&nbsp;&nbsp;dark brown micro-granules
                      </td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Molecular Formula:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;C18H16O6N2NaFe</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Fe content:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;6.0%</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        PH value:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;7-9</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        o-o content:&nbsp;&nbsp;
                      </td>
                      <td height="21">
                        &nbsp;&nbsp;o-o 2.0%, 3.0%, 4.2%, 4.8%
                      </td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Fertilizer category:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;Micronutrient</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Effective PH range:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp; 4-11</td>
                    </tr>
                    <tr>
                      <td align="right" height="21">
                        Low heavy metal content:&nbsp;&nbsp;
                      </td>
                      <td height="21">&nbsp;&nbsp;100% water soluble.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
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
