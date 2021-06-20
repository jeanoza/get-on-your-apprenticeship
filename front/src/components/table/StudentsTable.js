import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #282c34;
  opacity: 0.8;
  @media (max-width: 768px) {
    margin-bottom: 4em;
  }
`;

function StudentsTable({ students, student }) {
  return (
    // <div style={{ backgroundColor: "#282c34"}}>
    <Container>
      <table style={{ minWidth: "300px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>House</th>
            <th>Patronus</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((stu, index) => (
              <tr key={index}>
                <th>{stu.name}</th>
                <th>{stu.gender}</th>
                <th>{stu.house}</th>
                <th>{stu.patronus}</th>
              </tr>
            ))}
          {student && (
            <tr>
              <th>{student.name}</th>
              <th>{student.gender}</th>
              <th>{student.house}</th>
              <th>{student.patronus}</th>
            </tr>
          )}
        </tbody>
      </table>
    </Container>

    // </div>
  );
}

export default StudentsTable;
