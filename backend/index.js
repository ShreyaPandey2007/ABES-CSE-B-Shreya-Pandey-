import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/about')
      .then((res) => {
        setStudents(res.data); // backend sends array
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Data</h1>

      {students.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <h3>Name: {s.name}</h3>
          <h4>Class: {s.class}</h4>
          <hr />
        </div>
      ))}

    </div>
  );
};

export default App;
