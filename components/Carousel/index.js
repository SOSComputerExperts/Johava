import styled from "styled-components";
import ElasticCarousel from "react-elastic-carousel";
import CarouselArrowLeft from "assets/images/utils/carousel-arrow-left.svg";
import CarouselArrowRight from "assets/images/utils/carousel-arrow-right.svg";
import { useMediaQuery } from "hooks/useMediaQuery";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1000, itemsToShow: 3 },
];

const Carousel = ({ children }) => {
  const isMobile = useMediaQuery();
  return (
    <ElasticCarousel
      breakPoints={breakPoints}
      itemsToScroll={1}
      itemsToShow={2}
      renderArrow={Arrows}
      showArrows={isMobile ? false : true}
      pagination={isMobile ? true : false}
      itemPadding={[0, 20]}
    >
      {children}
    </ElasticCarousel>
  );
};

const Arrow = styled.button`
  background-color: transparent;
  border: none;
  opacity: ${({ isEdge }) => (isEdge ? 0 : 100)};
  cursor: pointer;
`;

const Arrows = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? CarouselArrowLeft.src : CarouselArrowRight.src;
  return (
    <>
      <Arrow onClick={onClick} isEdge={isEdge}>
        <img src={pointer} style={{ transform: "scale(0.75)" }} />
      </Arrow>
    </>
  );
};

export default Carousel;
