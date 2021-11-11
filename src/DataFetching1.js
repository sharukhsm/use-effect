import React, { useEffect, useState } from "react";
import axios from "axios";

//Data fetching from api. Fetching all the data from api and listing it.
function DataFetching1() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
      <ul>
        {apiData.map((datum) => (
          <li key={datum.id}> {datum.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching1;
