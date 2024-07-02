import React, { useState, useEffect } from "react";
import axios from "axios";

// function DiaryItem(props) {
//   return (
// <div>
//   <li>
//     <h2>{props.diaryInfo.title}</h2>
//     <p>{props.diaryInfo.content}</p>
//   </li>
// </div>
//   );
// }

function DiaryItem({ id }) {
  const [diaryInfo, setDiaryInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/diaries/${id}`)
      .then((response) => setDiaryInfo(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!diaryInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <strong>{diaryInfo.title}</strong>
      <p>{diaryInfo.content}</p>
    </div>
  );
}

export default DiaryItem;
