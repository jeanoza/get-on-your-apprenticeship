import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(40, 44, 52, 0.7);
  /* background-color: #747d8c; */
  color: rgb(255, 255, 255);
`;

const SLink = styled(Link)`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  :hover {
    background-color: rgb(255, 255, 255);
    color: #747d8c;
  }
  transition: color 0.3s ease-in-out, background-color 0.1s ease-in-out;
`;

function Navbar() {
  return (
    <Container>
      <SLink to="/">
        <FontAwesomeIcon icon={faHome} size="lg" />
      </SLink>
      <SLink to="/students">
        <FontAwesomeIcon icon={faUsers} size="lg" />
      </SLink>
      <SLink to="/randomstudent">
        <FontAwesomeIcon icon={faUserCheck} size="lg" />
      </SLink>
    </Container>
  );
}

export default Navbar;
