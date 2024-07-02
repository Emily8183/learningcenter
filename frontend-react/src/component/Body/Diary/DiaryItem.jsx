import React, { useState, useEffect } from "react";
import DeleteDiaryButton from "./DeleteDiaryButton";
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

function DiaryItem({ id, onEdit, onDelete }) {
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
    <div className="diaryItem">
      <strong>{diaryInfo.title}</strong>
      <p>{diaryInfo.content}</p>
      <DeleteDiaryButton id={diaryInfo.id} onDelete={onDelete} />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default DiaryItem;
