import styled from "styled-components";

import { Heading, Section } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";
import Product from "components/Product";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import ChemicalHeader from "assets/images/products/chemical-header.jpg";

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
      <SEO title="Chemical Products" />
      <Header title="Chemical Products" image={ChemicalHeader} />
      <ProductsContainer>
        <Heading>Titanium Dioxide</Heading>
        <Inner>
          <Product
            title="Tipex R560 Titanium Dioxide Pigment"
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for interior decorative
                coatings, road marking paint, and also for masterbatch, rubber,
                paper making, ceramics and etc.
                <br />
                <b>Characteristics:</b> Good whiteness and hiding power, medium
                weatherability
                <br />
                <b>Classifications:</b> IS0 591 R1 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R650 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for interior & exterior
                architectural coatings, water-based industrial coatings, and
                also for solvent-based coatings and interior & exterior powder
                coatings.
                <br />
                <b>Characteristics:</b> Zinc chemicals salt treatment General
                purpose pigment with inorganic and organic surface treatment.
                <br />
                <b>Classifications:</b> IS0 591 R2 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R660 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for inks, also for high quality
                industrial coatings, decorative coatings, wood lacquer and etc .
                <br />
                <b>Characteristics:</b> Zinc chemicals salt treatment Inorganic
                and organic surface treatment High gloss and high hiding power
                <br />
                <b>Classifications:</b> IS0 591 R1 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R670 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for interior decorative
                coatings, road marking paint, and also for masterbatch, rubber,
                paper making, ceramics and etc.
                <br />
                <b>Characteristics:</b> Zinc chemicals salt treatment
                <br />
                <b>Classifications:</b> IS0 591 R2 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compoundpaper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R680 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for exterior architectural
                coatings, water-based and solvent-based industrial coatings,
                automotive OEM coatings and refinishing coatings,
                weather-resistance powder coatings, and also for plastics with
                good brightness and weatherability requirements.
                <br />
                <b>Characteristics:</b> Dual purpose seeds Inorganic and organic
                surface treatment Excellent weatherability, high whiteness, high
                dispersibility, and high gloss Surface treatment: Silica,
                Alumina, organic silicon
                <br />
                <b>Classifications:</b> Alumina, Zirconia, Amphiphilically
                Modified
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R690 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for exterior PVC profile and
                pipes with high weatherability requirements, and also for
                thermal traffic paints .
                <br />
                <b>Characteristics:</b> Zinc chemicals salt treatment
                <br />
                <b>Classifications:</b> IS0 591 R2 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R700 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for plastic masterbatch and
                engineering plastics.
                <br />
                <b>Characteristics:</b> Zinc chemicals salt treatment Inorganic
                and organic surface treatment, dense Silica coated Excellent
                weatherability and Excellent flowability
                <br />
                <b>Classifications:</b> IS0 591 R1 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R760 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for interior decorative
                coatings, road marking paint, and also for masterbatch, rubber,
                paper making, ceramics and etc.
                <br />
                <b>Characteristics:</b> Good whiteness and hiding power, medium
                weatherability
                <br />
                <b>Classifications:</b> IS0 591 R1 ASTM D-476-84 Type 2
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
          <Product
            title="Tipex R100 Titanium Dioxide Pigment "
            text={
              <div style={{ margin: "50px 0px" }}>
                <b>Applications:</b> Recommended for interior coatings, printing
                inks, plastics and paper making .
                <br />
                <b>Characteristics:</b> Titanium dioxide anatase without surface
                treatment High whiteness and high brightness
                <br />
                <b>Classifications:</b> IS0 591 A1 ASTM D-476-84 Type 1
                <br />
                <b>Packing:</b> 25kg compound paper bag/ 500kg, 1000kg plastic
                woven bag
              </div>
            }
          />
        </Inner>

        <Heading style={{ marginTop: "50px" }}>Zirconium Chemicals</Heading>
        <Inner>
          <Product
            title="Zirconium Oxychloride 5270-92-8"
            text={
              <div>
                <table
                  border="1"
                  bordercolor="ffffff"
                  cellpadding="2"
                  cellspacing="1"
                  width="610"
                >
                  <tbody>
                    <tr>
                      <td width="16%">
                        <div align="left">Product Name</div>
                      </td>
                      <td width="84%">
                        <div align="left">Zirconium Oxychloride 5270-92-8</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div align="left">Formula</div>
                      </td>
                      <td>
                        <div align="left">ZrOCl2&nbsp;· 8H2O</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div align="left">Product per year</div>
                      </td>
                      <td>
                        <div align="left">20000mt/a</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div align="left">Uses</div>
                      </td>
                      <td>
                        <div align="left">
                          catalysts,&nbsp;special&nbsp;ceramics,&nbsp;coatings,&nbsp;adhesives&nbsp;for&nbsp;casting,&nbsp;tackiness&nbsp;agent,&nbsp;textiles,
                          <br />
                          antiperspirants,&nbsp;fireproofings&nbsp;and&nbsp;raw&nbsp;material&nbsp;for&nbsp;producing&nbsp;other&nbsp;zirconium&nbsp;products&nbsp;
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div align="left">Packing</div>
                      </td>
                      <td>
                        <div align="left">
                          25kg，500kg，1000kgplastic&nbsp;woven&nbsp;bag
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div align="left">Typical&nbsp;Properties</div>
                      </td>
                      <td>
                        <div>&nbsp;</div>
                        <div align="left">
                          <table
                            align="center"
                            border="1"
                            bordercolor="ffffff"
                            cellpadding="2"
                            cellspacing="1"
                            width="90%"
                          >
                            <tbody>
                              <tr>
                                <td rowspan="2" width="228">
                                  <div align="left">Item</div>
                                </td>
                                <td colspan="2">
                                  <div align="left">specifications</div>
                                </td>
                              </tr>
                              <tr>
                                <td width="136">
                                  <div align="left">superior grade</div>
                                </td>
                                <td width="132">
                                  <div align="left">first grade</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div align="left">ZrO2+HfO2&nbsp;%≥</div>
                                </td>
                                <td>
                                  <div align="left">36.0</div>
                                </td>
                                <td>
                                  <div align="left">35.0</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div align="left">Fe2O3&nbsp;%≤</div>
                                </td>
                                <td>
                                  <div align="left">0.0008</div>
                                </td>
                                <td>
                                  <div align="left">0.001</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div align="left">SiO2&nbsp;%≤</div>
                                </td>
                                <td>
                                  <div align="left">0.006</div>
                                </td>
                                <td>
                                  <div align="left">0.008</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div align="left">Na2O %≤</div>
                                </td>
                                <td>
                                  <div align="left">0.0015</div>
                                </td>
                                <td>
                                  <div align="left">0.002</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div align="left">TiO2&nbsp;%≤</div>
                                </td>
                                <td>
                                  <div align="left">0.0005</div>
                                </td>
                                <td>
                                  <div align="left">0.0005</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
          <Product
            title="Zirconium Dioxide 5280-23-4"
            text={
              <div>
                <table
                  align="center"
                  border="1"
                  bordercolor="ffffff"
                  cellpadding="0"
                  cellspacing="0"
                  width="89%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <p align="left">&nbsp;</p>
                        <table
                          border="1"
                          bordercolor="ffffff"
                          cellpadding="2"
                          cellspacing="1"
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td width="16%">
                                <div align="left">Product Name</div>
                              </td>
                              <td width="84%">
                                <div align="left">
                                  Zirconium Dioxide 5280-23-4
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div align="left">Formula</div>
                              </td>
                              <td>
                                <div align="left">ZrO2</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div align="left">annual&nbsp;output</div>
                              </td>
                              <td>
                                <div align="left">3000mt/a</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div align="left">Uses</div>
                              </td>
                              <td>
                                <div align="left">
                                  Catalysts,&nbsp;ion&nbsp;exchangers,&nbsp;electronic&nbsp;&nbsp;ceramics,&nbsp;ceramic&nbsp;glaze&nbsp;materials,&nbsp;coatings,
                                  <br />
                                  glass&nbsp;&amp;&nbsp;artificial&nbsp;stone,&nbsp;special&nbsp;ceramics,&nbsp;heat&nbsp;insulation&nbsp;coating&nbsp;and&nbsp;electronic&nbsp;industry
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div align="left">Packing</div>
                              </td>
                              <td>
                                <div align="left">
                                  25kg&nbsp;plastic&nbsp;woven&nbsp;bag&nbsp;or&nbsp;25kg&nbsp;cardboard&nbsp;drum&nbsp;lined&nbsp;with&nbsp;PE&nbsp;inside
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div align="left">Typical&nbsp;properties</div>
                              </td>
                              <td>
                                <table
                                  align="center"
                                  border="1"
                                  bordercolor="ffffff"
                                  cellpadding="2"
                                  cellspacing="1"
                                  width="90%"
                                >
                                  <tbody>
                                    <tr>
                                      <td rowspan="2" width="288">
                                        <div align="left">Items</div>
                                      </td>
                                      <td colspan="2">
                                        <div align="left">Specifications</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="190">
                                        <div align="left">first&nbsp;grade</div>
                                      </td>
                                      <td width="174">
                                        <div align="left">ceramic</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">
                                          ZrO2+HfO2&nbsp;%≥
                                        </div>
                                      </td>
                                      <td>
                                        <div align="left">99.5</div>
                                      </td>
                                      <td>
                                        <div align="left">99.0</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">Fe2O3&nbsp;%≤</div>
                                      </td>
                                      <td>
                                        <div align="left">0.02</div>
                                      </td>
                                      <td>
                                        <div align="left">0.05</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">SiO2&nbsp;%≤</div>
                                      </td>
                                      <td>
                                        <div align="left">0.04</div>
                                      </td>
                                      <td>
                                        <div align="left">0.06</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">Na2O %≤</div>
                                      </td>
                                      <td>
                                        <div align="left">0.01</div>
                                      </td>
                                      <td>
                                        <div align="left">0.2</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">TiO2&nbsp;%≤</div>
                                      </td>
                                      <td>
                                        <div align="left">0.006</div>
                                      </td>
                                      <td>
                                        <div align="left">0.5</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">
                                          LOI&nbsp;（900℃）%≤
                                        </div>
                                      </td>
                                      <td>
                                        <div align="left">0.5</div>
                                      </td>
                                      <td>
                                        <div align="left">0.5</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div align="left">
                                          Particle&nbsp;size(powder)
                                        </div>
                                      </td>
                                      <td colspan="2">
                                        <div align="left">D50: 0.5—5μm</div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>&nbsp;</p>
                      </td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
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
