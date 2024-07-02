import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "./DiaryItem";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setDiaries(response.data);
      })
      .catch((error) => {
        console.log("There's an error fetching the diaries!", error);
      });
  }, []);

  return (
    <div>
      <h1>Check out the latest diaries</h1>
      <ul>
        {diaries.map((diary) => (
          <li key={diary.id}>
            <DiaryItem id={diary.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiaryList;
