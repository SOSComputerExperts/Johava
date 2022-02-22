import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

import { Heading, Paragraph, Section, FlexBox, Button } from "theme";

import SEO from "components/SEO";
import Carousel from "components/Carousel";
import CarouselImg from "components/CarouselImg";
import CarouselNews from "components/CarouselNews";

import Fade from "react-reveal/Fade";

import HomeTriangles from "assets/images/home/header-triangles.jpg";
import SolutionsImage from "assets/images/home/solutions.jpg";
import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import MidPageTrianglesLeft from "assets/images/utils/MidPageTrianglesLeft.jpg";

// import ChemicalCarousel from "assets/images/home/chemical.jpg";
// import IndustrialCarousel from "assets/images/home/industrial.jpg";
import GrainsCarousel from "assets/images/home/Grains.jpg";
import SeaFoodCarousel from "assets/images/home/seafood.jpg";
import AgriculturalCarousel from "assets/images/home/agricultural.jpg";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Head = styled(FlexBox)`
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font2xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark.grey};
  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontBody};
    font-weight: bold;
    gap: 0;
  }
`;

const About = styled(Section)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.light.green};
  /* background-image: url(${MidPageTriangles.src}); */
`;

const Products = styled(Section)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const Solutions = styled(Section)`
  background-color: ${({ theme }) => theme.colors.light.green};
`;

const News = styled(Section)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (max-width: 1450px) {
    img {
      height: 550px;
      width: 720px;
    }
  }
`;

const HeadertextContainer = styled(FlexBox)`
  width: 45%;
  text-align: left;
  @media only screen and (max-width: 1200px) {
    width: 100% !important;
    text-align: center;
  }
`;

const MidPageTrianglesContainer = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
  z-index: -100;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SolutionsImageContainer = styled.img`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Home = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <SEO title="Home" />
      <Head>
        <Fade>
          <HeaderImageContainer>
            <img src={HomeTriangles.src} width="930" height="730" />
          </HeaderImageContainer>
        </Fade>

        <HeadertextContainer alignItems="center" justify="center">
          <Fade right>
            <div>
              <h1 style={{ fontWeight: 600, color: "#434483" }}>
                OVER 40 YEARS <br /> OF COMBINED EXPERIENCE
              </h1>
            </div>
          </Fade>
        </HeadertextContainer>
      </Head>

      <About>
        <Fade left>
          <Heading>About Johava</Heading>
        </Fade>
        <Fade>
          <Paragraph>
            Johava Enterprise Inc. was being established in 2012 and is now a
            leading solutions provider, sourcing and trade consulting company.
            We have functioned as a bridge between the North American and Asian
            markets and have been involved in sourcing and distribution of a
            variety of products and technologies into the Asian and Middle
            Eastern markets. Using our vast network of business contacts and
            distribution channels, we have successfully identified market
            opportunities, and sourced solutions from North American markets.
          </Paragraph>
        </Fade>
        <img
          src={MidPageTrianglesRight.src}
          style={{
            position: "absolute",
            top: "-200px",
            right: 0,
            height: "100vh",
            zIndex: -100,
          }}
        />
      </About>

      <Products>
        <Fade left>
          <Heading>Products</Heading>
        </Fade>
        <div style={{ padding: "20px" }}></div>

        <Fade>
          <Carousel>
            <CarouselImg
              imgSrc={AgriculturalCarousel}
              title="Agricultural"
              link="/products/agricultural/"
            />
            <CarouselImg
              imgSrc={GrainsCarousel}
              title="Pulses"
              link="/products/grains-and-pulses"
            />
            {/* <CarouselImg
              imgSrc={IndustrialCarousel}
              title="Industrial Manufacturing"
              link="/products/industrial-manufacturing"
            /> */}
            <CarouselImg
              imgSrc={SeaFoodCarousel}
              title="Seafood"
              link="/products/seafood"
            />
            {/* <CarouselImg
              imgSrc={ChemicalCarousel}
              title="Chemical"
              link="/products/chemical"
            /> */}
          </Carousel>
        </Fade>
      </Products>

      <FlexBox style={{ position: "relative" }}>
        <Solutions>
          <Fade left>
            <Heading>Solutions</Heading>
          </Fade>
          <Fade>
            <Paragraph style={{ marginBottom: "70px" }}>
              Johava Enterprise Inc. solution have earned the loyalty of clients
              through our dedicated business. We make it our priority to know
              each client's business and anticipate their needs.
            </Paragraph>

            <FlexBox justify="center">
              <Button
                color="secondary"
                onClick={() => router.push("/who-we-are/solutions")}
              >
                Read More
              </Button>
            </FlexBox>
          </Fade>
        </Solutions>
        <MidPageTrianglesContainer src={MidPageTrianglesLeft.src} />
        <SolutionsImageContainer src={SolutionsImage.src} />
      </FlexBox>

      <News>
        <Fade left>
          <Heading>News</Heading>
        </Fade>
        <div style={{ padding: "20px" }}></div>
        <Fade>
          <Carousel>
            {posts.map((post, index) => (
              <CarouselNews
                key={index}
                title={post.data.title}
                text={post.data.summary}
                link={post.slug}
              />
            ))}
          </Carousel>
        </Fade>
      </News>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      posts: files.map((filename) => {
        const markdownWithMetadata = fs
          .readFileSync(path.join("posts", filename))
          .toString();
        const parsedMarkdown = matter(markdownWithMetadata);
        return {
          slug: `news/${filename.substring(0, filename.length - 3)}`,
          data: parsedMarkdown.data,
        };
      }),
    },
  };
};

export default Home;
