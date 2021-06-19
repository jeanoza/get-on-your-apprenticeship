import React, { useState, useEffect } from "react";
import StudentsTable from "../../components/table/StudentsTable";
import BackDrop from "../../components/images/BackDrop";
import Loader from "../../components/loader/Loader";

function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getApi = () => {
    fetch("http://localhost:3000/real/students")
      .then((res) => res.text())
      .then((res) => JSON.parse(res))
      .then((res) => {
        setStudents(res.data);
        setIsLoading(false);
      })
      .catch((err) => err);
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
        <StudentsTable students={students} />
      </header>
    </div>
  );
}

export default Students;
