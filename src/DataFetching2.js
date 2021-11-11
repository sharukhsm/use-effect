import React, { useEffect, useState } from "react";
import axios from "axios";

//Data fetching from api. Fetching user specified data from the api.
function DataFetching2() {
  const [apiData, setApiData] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        //Setting the response to a variable
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); //Our effect now depends on idFromButtonClick, so we need re-rendering.

  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input value={id} onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>
        Fetch
      </button>
      <h1>{apiData.title}</h1>
      {/* <ul>
        {apiData.map((datum) => (
          <li key={datum.id}> {datum.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching2;
