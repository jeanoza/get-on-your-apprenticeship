import React, { useState, useEffect } from "react";
import logo from "./hogwarts.png";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const getApi = () => {
    fetch("http://localhost:3000/real/students")
      .then((res) => res.text())
      .then((res) => JSON.parse(res))
      .then((res) => setStudents(res.data))
      .catch((err) => err);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students:</p>
        {students.map((student, index) => (
          <p className="App-intro" key={index}>
            {student.name} ({student.house})
          </p>
        ))}
      </header>
    </div>
  );
};

export default App;
