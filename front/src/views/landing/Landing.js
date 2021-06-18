import React, { useState, useEffect } from "react";
import logo from "../../hogwarts.png";

function Landing() {
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
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students:</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>House</th>
              <th>Patronus</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.house}</td>
                <td>{student.patronus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Landing;
