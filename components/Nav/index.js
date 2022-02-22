import React from "react";
import Image from "next/image";
import styled from "styled-components";
import MenuIcon from "assets/images/utils/MenuIcon.png";
import Logo from "assets/images/Logo.png";

import Fade from "react-reveal/Fade";
import { useRouter } from "next/dist/client/router";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 20px 50px;
`;

const LogoPH = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  @media only screen and (max-width: 1200px) {
    position: relative;
    width: 100%;
    padding: 20px;
    text-align: center;
    z-index: 1000;
  }
  position: absolute;
  top: 0;
  right: 0;
  width: 35vw;
  /* min-width: 100%; */
  padding: 120px;
  background-color: ${({ theme }) => theme.colors.light.purple};
  z-index: 3;
`;

const MenuItems = styled.p`
  font-size: ${({ theme }) => theme.fontxl};
  font-weight: bold;
  letter-spacing: 4px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const MenuIconWrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 70px;
  height: 120px;
`;

const BackButton = styled.p`
  cursor: pointer;
  position: absolute;
  left: 70px;
  bottom: 35px;

  @media only screen and (max-width: 1200px) {
    bottom: 10px;
  }
`;

const Nav = () => {
  const navRef = React.useRef();
  const router = useRouter();
  useOnClickOutside(navRef, () => setIsOpen(false));
  const goTo = (page) => {
    router.push(page);
    setIsOpen(false);
  };

  const menuItems = [
    {
      id: 1,
      title: "Home",
      onClick: () => goTo("/"),
    },
    {
      id: 2,
      title: "Products",
      onClick: () => setCurrentMenuItems(productsSubItems),
    },
    {
      id: 3,
      title: "Who we are",
      onClick: () => setCurrentMenuItems(whoWeAreSubItems),
    },
    // {
    //   id: 4,
    //   title: "News",
    //   onClick: () => goTo(""),
    // },
    {
      id: 5,
      title: "Contacts",
      onClick: () => goTo("/contact-us"),
    },
  ];

  const productsSubItems = [
    // {
    //   id: 6,
    //   title: "Chemical",
    //   onClick: () => goTo("/products/chemical"),
    // },
    {
      id: 14,
      title: "Seafood",
      onClick: () => goTo("/products/seafood"),
    },
    {
      id: 7,
      title: "Agricultural",
      onClick: () => goTo("/products/agricultural"),
      // onClick: () => setCurrentMenuItems(agriculturalSubItems),
    },
    {
      id: 15,
      title: "Pulses",
      onClick: () => goTo("/products/grains-and-pulses"),
    },
    // {
    //   id: 8,
    //   title: "Industrial Manufacturing",
    //   onClick: () => goTo("/products/industrial-manufacturing"),
    // },
  ];

  const whoWeAreSubItems = [
    {
      id: 9,
      title: "About Us",
      onClick: () => goTo("/who-we-are/about-us"),
    },
    {
      id: 10,
      title: "Projects",
      onClick: () => goTo("/who-we-are/projects"),
    },
    {
      id: 11,
      title: "Solutions",
      onClick: () => goTo("/who-we-are/solutions"),
    },
  ];

  const agriculturalSubItems = [
    {
      id: 12,
      title: "Pest and disease control",
      onClick: () => goTo("/products/agricultural/pest_disease"),
    },
    {
      id: 13,
      title: "Fertilizers and plant support",
      onClick: () => goTo("/products/agricultural/fertilize_plant_support"),
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [currentMenuItems, setCurrentMenuItems] = React.useState(menuItems);

  return (
    <div ref={navRef}>
      <Main style={{ zIndex: 4 }}>
        <LogoPH onClick={() => router.push("/")}>
          <Fade left cascade>
            <Image src={Logo} width={130} height={130} />
          </Fade>
        </LogoPH>
        <MenuIconWrapper
          onClick={() => {
            setIsOpen((currentState) => !currentState);
            setCurrentMenuItems(menuItems);
          }}
        >
          <Image src={MenuIcon} />
        </MenuIconWrapper>
      </Main>
      {isOpen ? (
        <Menu>
          <Fade bottom cascade>
            <div>
              {currentMenuItems.map((item) => (
                <MenuItems onClick={item.onClick} key={item.id}>
                  {item.title}
                </MenuItems>
              ))}
              {currentMenuItems[0].title !== menuItems[0].title ? (
                <BackButton onClick={() => setCurrentMenuItems(menuItems)}>
                  ← Back
                </BackButton>
              ) : null}
            </div>
          </Fade>
        </Menu>
      ) : null}
    </div>
  );
};

export default Nav;
