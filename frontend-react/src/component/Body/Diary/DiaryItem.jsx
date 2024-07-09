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
  const [initialDiary, setInitialDiary] = useState({
    title: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiary, setEditedDiary] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/diaries/${id}`);
        setInitialDiary(response.data);
        setEditedDiary({
          title: response.data.title,
          content: response.data.content,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiary();
  }, [id]);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditedDiary((prevDiary) => {
      return {
        ...prevDiary,
        [name]: value,
      };
    });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    onEdit(id, editedDiary);
    setIsEditing(false);
  };

  const handleCancelEdit = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
    setEditedDiary(initialDiary);
  };

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
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <strong>{editedDiary.title}</strong>
          <p>{editedDiary.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryItem;
