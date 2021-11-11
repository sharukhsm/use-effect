import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching2() {
  const [apiData, setApiData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        //Setting the response to a variable
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //Empty dependency, so that It only renders once.

  return (
    <div>
      <input></input>
      {/* <ul>
        {apiData.map((datum) => (
          <li key={datum.id}> {datum.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching2;
