import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import HeadShot from "../../components/images/HeadShot";
import Loader from "../../components/loader/Loader";
import styled from "styled-components";

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

function Random({ match: { path } }) {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getApi = () => {
    fetch(`/real/${path}`)
      .then((res) => res.text())
      .then((res) => JSON.parse(res))
      .then((res) => {
        setStudent(res.data);
        setIsLoading(false);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    getApi(); // eslint-disable-next-line
  }, []);

  const houseImageFilter = (house) => {
    return houseImages[house];
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <BackDrop urlImage={student && houseImageFilter(student.house)} />
          <header className="App-header">
            <Title>Here is a student seleted by random choice:</Title>
            <HeadShot urlImage={student && student.image} />
            <StudentsTable student={student} />
          </header>
        </div>
      )}
    </>
  );
}

export default Random;
