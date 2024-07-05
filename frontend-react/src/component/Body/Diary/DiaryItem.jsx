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

function DiaryItem({ id, onEdit, onDelete }) {
  const [diaryInfo, setDiaryInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiary, setEditedDiary] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/diaries/${id}`)
      .then((response) => {
        setDiaryInfo(response.data);
        setEditedDiary({
          title: response.data.title,
          content: response.data.content,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleEditChange = (event) => {
    setEditedDiary((prevDiary) => {
      return {
        ...prevDiary,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const changes = {};

    if (editedDiary.title !== diaryInfo.title) {
      changes.title = editedDiary.title;
    }

    if (editedDiary.content !== diaryInfo.content) {
      changes.content = editedDiary.content;
    }

    onEdit(id, changes);
    setIsEditing(false);
  };

  if (!diaryInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="diaryItem">
      {/* set up a window for editting diaries */}
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={editedDiary.title}
            onChange={handleEditChange}
          />
          <textarea
            name="content"
            value={editedDiary.content}
            onChange={handleEditChange}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <strong>{diaryInfo.title}</strong>
          <p>{diaryInfo.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryItem;
