import React from "react";
import logo from "../../hogwarts.png";
import BackDrop from "../../components/images/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7em;
`;
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Span = styled.span`
  margin-left: 10px;
`;

function Landing() {
  return (
    <div>
      <BackDrop />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Hogwarts</h1>
        <p>There are some functionalities at the left screen :</p>
        <Group>
          <Item>
            <FontAwesomeIcon icon={faHome} size="lg" />
            <Span>redirect main page</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <Span>redirect students list page</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUserCheck} size="lg" />
            <Span>redirect ramdom student choice page</Span>
          </Item>
        </Group>
      </header>
    </div>
  );
}

export default Landing;
