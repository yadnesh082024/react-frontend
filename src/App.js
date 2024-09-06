import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "black" }}>Git Actions Frontend</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "black",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
