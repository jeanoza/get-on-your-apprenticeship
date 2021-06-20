import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.bgImage});
  background-position: top center;
  background-size: cover;
  border-radius: 100px;
  box-shadow: 5px 5px 5px rgb(20, 20, 20, 0.5);
  margin-bottom: 1em;
`;
const HeadShot = ({
  urlImage = "https://www.madmoizelle.com/wp-content/uploads/2020/09/hogwarts-legacy-harry-potter-sortie.jpg",
}) => {
  return <Container bgImage={urlImage}></Container>;
};

export default HeadShot;
