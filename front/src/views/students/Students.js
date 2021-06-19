import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import Loader from "../../components/loader/Loader";
import axios from "axios";

const baseURL = "http://localhost:3000/real/students";

function Students(props) {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getApi = (house) => {
    setIsLoading(true);
    axios.get(house ? `${baseURL}?house=${house}` : baseURL).then((res) => {
      setStudents(res.data.data);
      setIsLoading(false);
    });
  };
  const onChange = (event) => {
    getApi(event.currentTarget.value);
  };

  useEffect(() => {
    getApi(); // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <BackDrop />
      <header className="App-header">
        <p>Here is a list of all students:</p>
        <select onChange={onChange}>
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
