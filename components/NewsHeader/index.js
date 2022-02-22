import styled from "styled-components";
import { config } from "config";
import { Heading } from "theme";

const HeaderImage = styled.div`
  img {
    width: 100vw !important;
    height: 55vh !important;
    object-fit: cover;
  }
`;

const PageTitleContainer = styled.div`
  margin: -5px;
  padding: 50px 150px;
  @media only screen and (max-width: 600px) {
    padding: 50px 50px;
  }
  background-color: ${({ theme }) => theme.colors.light.green};
`;

const CustomHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.font2xl};
  color: ${({ theme }) => theme.colors.dark.grey};
  margin: 0;
`;

const Header = ({ title, image }) => {
  return (
    <>
      {image ? (
        <HeaderImage>
          <img src={`${config.BASE_URL}${image}`} alt={title} />
        </HeaderImage>
      ) : null}
      <PageTitleContainer>
        <CustomHeading>{title}</CustomHeading>
      </PageTitleContainer>
    </>
  );
};

export default Header;
