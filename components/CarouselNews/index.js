import styled from "styled-components";
import { FlexBox, Paragraph, Button } from "theme";
import { useRouter } from "next/dist/client/router";

const Container = styled(FlexBox)`
  max-height: 400px;
  max-width: 450px;
  min-height: 400px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.light.grey};
  padding: 20px;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px black solid;
  text-align: center;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const CardParag = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
`;

const CarouselNews = ({ title, text, link }) => {
  const router = useRouter();
  return (
    <Container justify="center" alignItems="center">
      <Inner>
        <Title>{title}</Title>
        <CardParag>{text}</CardParag>
        <div
          style={{ position: "absolute", left: 0, right: 0, bottom: "30px" }}
        >
          <Button onClick={() => router.push(link)} color="secondary" small>
            Read More
          </Button>
        </div>
      </Inner>
    </Container>
  );
};

export default CarouselNews;
