import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { Section, FlexBox, Button, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";
import Modal from "components/Modal";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import Pulses from "assets/images/products/Pulses.jpeg";
import PulsesMap from "assets/images/products/pulses-map.jpeg";
import ChickPeas from "assets/images/products/Chickpeas.jpg";
import DesiChickPeas from "assets/images/products/Desi-Chickpeas.jpg";
import Romano1 from "assets/images/products/Romano1.jpg";
import Romano2 from "assets/images/products/Romano2.jpg";
import Peas1 from "assets/images/products/Peas1.jpg";
import Peas2 from "assets/images/products/Peas2.jpg";
import GreenLentils from "assets/images/products/GreenLentils.jpg";
import RedLentils from "assets/images/products/RedLentils.jpg";
import RedKidneyBeans from "assets/images/products/RedKidneyBeans.jpg";
import DarkKidneyBeans from "assets/images/products/DarkKidneyBeans.jpg";

import GreenLentil1 from "assets/images/products/green-lentil-1.jpg";
import GreenLentil2 from "assets/images/products/green-lentil-2.jpg";
import GreenLentil3 from "assets/images/products/green-lentil-3.jpg";

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

const TabContainer = styled(FlexBox)`
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const TabItem = styled(Button)`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primary};
  padding: 20px 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

const ReadMoreButton = styled(Button)`
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Home = () => {
  const [currentTab, setCurrentTab] = useState("CHICKPEAS");
  const [isGreenLentilsOpen, setIsGreenLentilsOpen] = useState(false);
  const [isRedLentilsOpen, setIsRedLentilsOpen] = useState(false);

  return (
    <>
      <SEO title="Grains & Pulses" />
      <Header title="Pulses" image={Pulses} />
      <ProductsContainer>
        <Paragraph>
          A pulse is the edible seed from a legume plant. Pulses include beans,
          lentils, and peas. For example, a pea pod is a legume, but the pea
          inside the pod is the pulse. Typically, pulses contain twice the
          amount of protein found in whole grains like wheat, oats, barley and
          rice. Pulses are very high in fibre and contain both soluble and
          insoluble fibre. Diets that are high in fibre can help with weight
          management. Dietary fibre aids in satiety and supports digestive
          health by promoting regularity. Pulses are Micronutrient Rich; they
          provide substantial amounts of vitamins and minerals including iron,
          potassium, magnesium zinc, and folate. Diets that incorporate pulses
          have demonstrated higher intakes of protein, fibre, folate zinc,
          calcium, potassium, iron, and magnesium All the pulses we offer are
          CGC standards, Canadian Grain Commission .
        </Paragraph>
        <div style={{ textAlign: "center" }}>
          <Image src={PulsesMap} alt="Pulses Map" />
        </div>
        <TabContainer justify="center" alignItems="center">
          <TabItem
            onClick={() => setCurrentTab("CHICKPEAS")}
            isActive={currentTab === "CHICKPEAS"}
          >
            CHICKPEAS
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("ROMANO")}
            isActive={currentTab === "ROMANO"}
          >
            ROMANO
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("PEAS")}
            isActive={currentTab === "PEAS"}
          >
            PEAS
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("LENTILS")}
            isActive={currentTab === "LENTILS"}
          >
            LENTILS
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("KIDNEY BEANS")}
            isActive={currentTab === "KIDNEY BEANS"}
          >
            KIDNEY BEANS
          </TabItem>
        </TabContainer>
        {/* <Heading>Pest & Disease Control</Heading> */}
        <Inner>
          {currentTab === "CHICKPEAS" ? (
            <>
              {/* <Heading>CHICKPEAS</Heading> */}
              <Paragraph>
                Chickpeas, also called garbanzo beans. They have a buttery,
                nutty flavor and creamy texture. In the U.S., the Kabuli variety
                is more popular, which are tan, round, and slightly larger than
                a pea. In the Middle East and India, the Desi variety is more
                common. These are smaller, darker, and less round than Kabuli
                chickpeas. They help with digestion. Chickpeas are high in
                dietary fiber, especially a soluble fibre called raffinose. The
                good bacteria in your gut breaks this down so your colon can
                digest it slowly. Studies have found that eating more chickpeas
                can help make bowel movements easier and more regular.
              </Paragraph>

              <div style={{ display: "flex", gap: "50px" }}>
                <div>
                  <Image src={ChickPeas} height={400} />
                  <Paragraph>CHICKPEAS</Paragraph>
                </div>

                <div>
                  <Image src={DesiChickPeas} height={400} />
                  <Paragraph>DESI CHICKPEAS</Paragraph>
                </div>
              </div>
            </>
          ) : currentTab === "ROMANO" ? (
            <>
              <Paragraph>
                Romano beans are a rich source of dietary fibre and quality
                protein, which is good for your metabolism and helps to keep you
                feeling satiated for longer periods of time. Their fibre content
                also helps to keep blood sugar levels in check. These beans help
                to reduce cholesterol, making them good for your heart.
              </Paragraph>
              <div style={{ display: "flex", gap: "50px" }}>
                <div>
                  <Image src={Romano1} height={400} />
                  <Paragraph>ROMANO/CRANBERRY BEANS</Paragraph>
                </div>
                <div>
                  <Image src={Romano2} height={400} />
                </div>
              </div>
            </>
          ) : currentTab === "PEAS" ? (
            <>
              <Paragraph>
                Split peas are often confused with lentils. While they both
                belong to the family of legumes, split peas are different from
                lentils. Like the name suggests, split peas are field peas. They
                are grown specifically for drying, whereas lentils are harvested
                as seeds and then dried. Once the peas are dried, the outer skin
                is removed, and they are split in half. There are two main types
                of split peas: green and yellow. Both are nutritious and hearty,
                but they differ in flavor. Green split peas are sweeter, and
                yellow peas are milder. Yellow split peas are also starchier.
                Most legumes are a rich source of vitamins and minerals, and
                split peas are no exception. A 3.5-ounce serving provides : 1
                milligram of zinc, 36 milligrams of magnesium, 262 milligrams of
                potassium, 1.29 milligrams of iron.
              </Paragraph>
              <div style={{ display: "flex", gap: "50px" }}>
                <div>
                  <Image src={Peas1} height={400} />
                  <Paragraph>CHICKPEAS</Paragraph>
                </div>
                <div>
                  <Image src={Peas2} height={400} />
                  <Paragraph>DESI CHICKPEAS</Paragraph>
                </div>
              </div>
            </>
          ) : currentTab === "LENTILS" ? (
            <>
              <Paragraph>
                Highly nutritious Lentils are often overlooked, even though
                they’re an inexpensive way of getting a wide variety of
                nutrients. For example, they’re packed with B vitamins,
                magnesium, zinc, and potassium. Lentils are made up of more than
                25% protein, which makes them an excellent meat alternative.
                They’re also a great source of iron, a mineral that is sometimes
                lacking in vegetarian diets . Though different types of lentils
                may vary slightly in their nutrient content, 1 cup (200 grams)
                of cooked lentils generally provides the following
                <ul>
                  <li>Calories: 230</li>
                  <li>Carbs: 39.9 grams</li>
                  <li>Protein: 17.9 grams</li>
                  <li>Fat: 0.8 grams</li>
                  <li>Fiber: 15.6 grams</li>
                  <li>Thiamine: 28% of the Daily recommended intake</li>
                  <li>Niacin: 13% of the Daily recommended intake</li>
                  <li>Vitamin B6: 21% of the Daily recommended intake</li>
                  <li>Folate: 90% of the Daily recommended intake</li>
                  <li>Pantothenic acid: 25% of the Daily recommended intake</li>
                  <li>Iron: 37% of the Daily recommended intake</li>
                  <li>Magnesium: 17% of the Daily recommended intake</li>
                  <li>Phosphorus: 28% of the DV</li>
                  <li>Potassium: 16% of the DV</li>
                  <li>Zinc: 23% of the DV</li>
                  <li>Copper: 55% of the DV</li>
                  <li>Manganese: 43% of the DV</li>
                </ul>
              </Paragraph>

              <div style={{ display: "flex", gap: "50px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Image src={GreenLentils} height={400} />
                  <ReadMoreButton
                    onClick={() => setIsGreenLentilsOpen(true)}
                    style={{}}
                  >
                    Read More
                  </ReadMoreButton>
                </div>
                <Modal
                  onClose={() => {
                    setIsGreenLentilsOpen(false);
                  }}
                  open={isGreenLentilsOpen}
                >
                  <h2>Green Lentils</h2>
                  <p>
                    Green lentils are probably the most used among lentil
                    species. Whole Green Lentil (Larid/Richlea/Eston)...these
                    are the size classifications Lentils Laird lentils are Large
                    (6.0 - 7.0 mm) lentils with a green skin After cooking the
                    lentils turn dark brown in colour, Richlea Lentils are
                    medium sized green lentils; They fall in between Laird and
                    Eston Green Eston Lentils are a smaller, speckled variety of
                    green lentils Green lentils are rich in antioxidants, iron,
                    and magnesium. They work particularly well over salads and
                    as a warm side, because of their peppery taste. They do take
                    the longest to cook of all the varieties, about 45 minutes,
                    but hold their shape well. 1/2 cup of cooked green lentils
                    contains:
                    <ul>
                      <li>Calories: 120</li>
                      <li>Carbohydrates: 21g</li>
                      <li>Fat: 0.4 g</li>
                      <li>Protein: 9.5 g</li>
                      <li>Fiber: 4.5 g</li>
                      <li> Glycemic Index: Low Green</li>
                    </ul>
                    Green lentils have a power of their own in terms of
                    nutrition. Lentils, a good source of potassium, calcium,
                    zinc, niacin and vitamin K, are also rich in dietary fiber,
                    lean protein, folate, and iron
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "40px",
                    }}
                  >
                    <div style={{ width: "200px" }}>
                      <Image src={GreenLentil1} height={200} width={200} />
                      <p>
                        Green Eston Lentils are a smaller, speckled variety of
                        green lentils
                      </p>
                    </div>
                    <div style={{ width: "200px" }}>
                      <Image src={GreenLentil2} height={200} width={200} />
                      <p>Richlea Lentils are medium sized green lentils</p>
                    </div>
                    <div style={{ width: "200px" }}>
                      <Image src={GreenLentil3} height={200} width={220} />
                      <p>
                        Laird lentils are Large (6.0 - 7.0 mm) lentils with a
                        green skin After cooking the lentils turn dark brown in
                        colour
                      </p>
                    </div>
                  </div>
                  <p style={{ textAlign: "center", marginTop: "50px" }}>
                    <Button
                      //   href={link}
                      color="secondary"
                      onClick={() => {
                        setIsGreenLentilsOpen(false);
                      }}
                      small
                    >
                      Close
                    </Button>
                  </p>
                </Modal>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Image src={RedLentils} height={400} />
                  <ReadMoreButton onClick={() => setIsRedLentilsOpen(true)}>
                    Read More
                  </ReadMoreButton>
                </div>
                <Modal
                  onClose={() => {
                    setIsRedLentilsOpen(false);
                  }}
                  open={isRedLentilsOpen}
                >
                  <h2>Red Lentils</h2>
                  <p>
                    Among other lentils, red lentils have a sweet distinct
                    flavor. They are seeds that split in half when the skin is
                    removed or hulled. Its color can be actually red to orange
                    color, yellow, or gold. It’s the quickest and easiest to
                    prepare among lentil varieties and creates a smooth
                    puree-like consistency once cooked which is why they are the
                    perfect ingredient for traditional Indian stews lentil or
                    dal, curries and thick creamy soups. It is good in absorbing
                    flavor and turns golden color when cooked. They can be kept
                    in refrigerator conveniently in an airtight container for
                    longer periods. The largest exporter of red lentils in the
                    world is Canada wherein they grow the kind of red lentil
                    that originally has the brownish-green skin. Some of the
                    names for these varieties are crimson, redwing, red cap,
                    blaze, and robin. In India, they are referred to as masoor
                    dahl while in America the popular variety is red chief which
                    has a tan skin.
                  </p>
                  <p style={{ textAlign: "center", marginTop: "50px" }}>
                    <Button
                      //   href={link}
                      color="secondary"
                      onClick={() => {
                        setIsRedLentilsOpen(false);
                      }}
                      small
                    >
                      Close
                    </Button>
                  </p>
                </Modal>
              </div>
            </>
          ) : currentTab === "KIDNEY BEANS" ? (
            <>
              <Paragraph>
                Dark Red Kidney Beans are large, kidney-shaped beans with a
                deep, glossy red skin. Light Red Kidney Beans are large,
                kidney-shaped beans with light red/pink glossy skin. They have a
                firm texture, and they hold up well in soups or other dishes
                that cook for a long time. Kidney beans are an excellent
                plant-based source of protein. They're also rich in various
                minerals, vitamins, fibers, antioxidants, and other unique plant
                compounds.
              </Paragraph>

              <div style={{ display: "flex", gap: "50px" }}>
                <div>
                  <Image src={RedKidneyBeans} height={400} />
                  <Paragraph>Red KIDNEY BEANS</Paragraph>
                </div>
                <div>
                  <Image src={DarkKidneyBeans} height={400} />
                  <Paragraph>DARK KIDNEY BEANS</Paragraph>
                </div>
              </div>
            </>
          ) : null}
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
