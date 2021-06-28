import React from "react";
import logo from "../../hogwarts.png";
import BackDrop from "../../components/images/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserCheck,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Seperator = styled.div`
  width: 1em;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7em;
  background-color: rgb(40, 44, 52, 0.7);
  padding: 10px;
  border-radius: 10px;
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
        <Group id="Landing-Header">
          <Item>
            <FontAwesomeIcon icon={faHome} size="lg" />
            <Seperator />
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
            <Span>Redirect to main page</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <Seperator />
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
            <Span>Redirect to students list page</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUserCheck} size="lg" />
            <Seperator />
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
            <Span>Redirect to ramdom student choice page</Span>
          </Item>
        </Group>
      </header>
    </div>
  );
}

export default Landing;
