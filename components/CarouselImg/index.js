import styled from "styled-components";
import Image from "next/image";
import { FlexBox } from "theme";
import { useRouter } from "next/dist/client/router";

const Container = styled.div`
  position: relative;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

// const TextCenter = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const TextRight = styled(FlexBox)`
  position: absolute;
  top: 100px;
  right: 0px;
  height: 170px;
  width: 280px;
  background-color: rgba(256, 256, 256, 0.4);
  color: white;
  font-size: ${({ theme }) => theme.fontlg};
  font-weight: bold;
  text-align: center;

  @media only screen and (max-width: 600px) {
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 20px 0px;
    font-size: ${({ theme }) => theme.fontlg};
  }
`;

const CarouselImg = ({ imgSrc, title, link }) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(link)}>
      <Image src={imgSrc} width="400" height="400" placeholder="blur" />

      <TextRight justify="center" alignItems="center">
        {title}
      </TextRight>
    </Container>
  );
};

export default CarouselImg;
