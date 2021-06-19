import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import HeadShot from "../../components/images/HeadShot";
import Loader from "../../components/loader/Loader";

const houseImages = {
  Gryffindor:
    "https://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2016/08/shield_gry.gif",
  Slytherin:
    "https://images-na.ssl-images-amazon.com/images/I/61rvsHZ3AmL._AC_SY450_.jpg",
  Hufflepuff:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrA8vWBx2siK0ji082qNUQfvP-xGInFFDB5ykbYJq459AOPcOx97p-yT1d7Am6aBEDsYk&usqp=CAU",
  Ravenclaw:
    "https://i.pinimg.com/originals/2e/39/fc/2e39fc365d993426d9d42e7764408060.jpg",
};

function Random({ match: { path } }) {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getApi = () => {
    fetch(`http://localhost:3000/real/${path}`)
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
            <HeadShot urlImage={student && student.image} />
            <p>Here is a one student seleted by random choice:</p>
            <StudentsTable student={student} />
          </header>
        </div>
      )}
    </>
  );
}

export default Random;
