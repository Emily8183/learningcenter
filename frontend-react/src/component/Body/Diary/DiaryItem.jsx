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

function DiaryItem({ diaryId }) {
  const [diaryInfo, setDiaryInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/diaries/${diaryId}`)
      .then((response) => setDiaryInfo(response.data))
      .catch((error) => console.error(error));
  }, [diaryId]);

  if (!diaryInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{diaryInfo.title}</h2>
      <p>{diaryInfo.content}</p>
    </div>
  );
}

export default DiaryItem;
