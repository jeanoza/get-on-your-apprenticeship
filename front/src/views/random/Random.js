import React, { useState, useEffect } from "react";

function Random({ match: { path } }) {
  const [student, setStudent] = useState(null);
  const getApi = () => {
    fetch(`http://localhost:3000/real/${path}`)
      .then((res) => res.text())
      .then((res) => JSON.parse(res))
      .then((res) => setStudent(res.data))
      .catch((err) => err);
  };
  useEffect(() => {
    getApi();
  }, []);
  return <div>{student && student.name}</div>;
}

export default Random;
