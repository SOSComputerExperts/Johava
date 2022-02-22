import React from "react";
import styled from "styled-components";
import { FlexBox, Button } from "theme";
import Image from "next/image";
import Tidioxide from "assets/images/products/ti-dioxide.jpeg";
import Modal from "components/Modal";

const Container = styled(FlexBox)`
  flex: 1 0 10%;
  height: 400px;
  width: 400px;
  min-height: 400px;
  min-width: 400px;
  background-color: ${({ theme }) => theme.colors.lighter.grey};
  padding: 20px;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px black solid;
  text-align: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const CarouselNews = ({ title, text, link, img = Tidioxide }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Container justify="center" alignItems="center">
        <Inner>
          <Image src={img} width="250" height="200" />
          <Title>{title}</Title>
          {text ? (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "30px",
              }}
            >
              <Button
                href={link}
                color="secondary"
                onClick={() => {
                  setIsOpen(true);
                }}
                small
              >
                Learn More
              </Button>
            </div>
          ) : null}
        </Inner>
      </Container>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          <Button
            href={link}
            color="secondary"
            onClick={() => {
              setIsOpen(false);
            }}
            small
          >
            Close
          </Button>
        </p>
      </Modal>
    </>
  );
};

export default CarouselNews;
