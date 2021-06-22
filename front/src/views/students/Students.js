import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import styled from "styled-components";

const axiosInstance = axios.create({
  baseURL: process.env.BaseURL || "http://localhost:3000"
})

const houseImages = {
  Gryffindor:
    "https://pm1.narvii.com/6640/8c51171623bec2c66ce020cc6d90929089fb45f8_hq.jpg",
  Slytherin: "https://i0.wp.com/wallpapercave.com/wp/wp3897901.jpg",
  Hufflepuff:
    "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/misc/45/d12f940413395251.jpg",
  Ravenclaw:
    "https://i.pinimg.com/originals/2e/39/fc/2e39fc365d993426d9d42e7764408060.jpg",
};

const Title = styled.p`
  padding: 5px 10px;
  background-color: rgb(40, 44, 52, 0.7);
  border-radius: 10px;
`;

function Students(props) {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState("all");

  const getApi = (house = "All") => {
    setIsLoading(true);
    axiosInstance.get(house !== (undefined || "All") ? `/real/students?house=${house}` : "/real/students")
      .then((res) => {
      setStudents(res.data.data);
      setIsLoading(false);
    }).catch(e=> {
      throw e
    });
  };
  const onChange = (event) => {
    getApi(event.currentTarget.value);
    setCurrentValue(event.currentTarget.value);
  };

  useEffect(() => {
    getApi(); // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <BackDrop urlImage={currentValue && houseImages[currentValue]} />
      <header className="App-header">
        <Title>
          Here is a list of {currentValue} {!currentValue && "all"} students:
        </Title>
        <select onChange={onChange} value={currentValue}>
          <option>All</option>
          <option>Gryffindor</option>
          <option>Slytherin</option>
          <option>Hufflepuff</option>
          <option>Ravenclaw</option>
        </select>
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
