import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import Loader from "../../components/loader/Loader";
import styled from "styled-components";
import { axiosInstance } from "../../helper/axios";
import { Link } from "react-router-dom";

const houseImages = [
  {
    name: "Gryffindor",
    url: "https://pm1.narvii.com/6640/8c51171623bec2c66ce020cc6d90929089fb45f8_hq.jpg",
    color: "#FD7272",
  },
  {
    name: "Slytherin",
    url: "https://i0.wp.com/wallpapercave.com/wp/wp3897901.jpg",
    color: "#10ac84",
  },
  {
    name: "Hufflepuff",
    url: "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/misc/45/d12f940413395251.jpg",
    color: "#ffc048",
  },
  {
    name: "Ravenclaw",
    url: "https://i.pinimg.com/originals/2e/39/fc/2e39fc365d993426d9d42e7764408060.jpg",
    color: "#4a69bd",
  },
];

const Title = styled.p`
  padding: 5px 10px;
  background-color: rgb(40, 44, 52, 0.7);
  border-radius: 10px;
`;

const Button = styled(Link)`
  /* all: unset; */
  padding: 10px;
  color: rgb(255, 255, 255);
  background-color: ${(props) => props.bg};
  border-radius: 15px;
  margin: 5px;
  /* font-weight: 700; */
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Students(props) {
  // console.log(process.env);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState("all");

  const getApi = (house) => {
    setIsLoading(true);
    axiosInstance
      .get(house !== "all" ? `real/students?house=${house}` : "real/students")
      .then((res) => {
        setStudents(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        throw e.message;
      });
  };

  const onClick = (event) => {
    setCurrentValue(event.currentTarget.innerText);
  };

  useEffect(() => {
    getApi(currentValue); // eslint-disable-next-line
  }, [currentValue]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <BackDrop
        urlImage={
          currentValue &&
          houseImages.filter((houseImage) => {
            return houseImage.name === currentValue;
          })[0]?.url
        }
      />
      <header className="App-header">
        <Title>
          Here is a list of {currentValue} {!currentValue && "all"} students:
        </Title>
        <Group>
          {houseImages.map((house, index) => (
            <Button to="#!" key={index} onClick={onClick} bg={house.color}>
              {house.name}
            </Button>
          ))}
        </Group>
        <StudentsTable students={students} />
      </header>
    </div>
  );
}

export default Students;

// fetch(
//   house
//     ? `http://localhost:3000/real/students/house?=${house}`
//     : "http://localhost:3000/real/students"
// )
//   .then((res) => res.text())
//   .then((res) => JSON.parse(res))
//   .then((res) => {
//     setStudents(res.data);
//     setIsLoading(false);
//   })
//   .catch((err) => err);
