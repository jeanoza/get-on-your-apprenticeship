import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Group = styled.div`
  width: 10em;
  display: flex;
  justify-content: space-between;
`;

const loadAction = keyframes`
    0% {
    transform: none;
    }
    25% {
    transform: scaleY(2);
    }
    75%,
    100% {
    transform: none;
    }
`;

const Colone = styled.div`
  width: 0.4em;
  height: 2em;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  animation: ${loadAction} 1s ease-in-out infinite;
  :nth-child(${(props) => props.nth}) {
    animation-delay: ${(props) => props.delay};
  }
`;

function Loader() {
  const array = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s"];
  return (
    <Container>
      <Group>
        {array.map((current, index) => (
          <Colone key={index} nth={index + 1} delay={current} />
        ))}
      </Group>
    </Container>
  );
}

export default Loader;
