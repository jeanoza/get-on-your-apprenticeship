import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
`;
const BackDrop = ({
  urlImage = "https://www.madmoizelle.com/wp-content/uploads/2020/09/hogwarts-legacy-harry-potter-sortie.jpg",
}) => {
  return <Container bgImage={urlImage}></Container>;
};

export default BackDrop;
