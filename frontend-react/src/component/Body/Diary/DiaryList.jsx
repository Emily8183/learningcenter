import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "./DiaryItem";
import CreateDiary from "./CreateDiary";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);

  //to connect frontend and backend
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

  const handleAddDiary = (newDiary) => {
    setDiaries((prevDiaries) => [...prevDiaries, newDiary]);
  };

  const handleDelete = (id) => {
    //pass the id from the child component when calling "onDelete"
    axios
      .delete(`http://localhost:3000/diaries/${id}`)
      .then(() => {
        setDiaries((prevDiaries) =>
          prevDiaries.filter((diary) => diary.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id, updatedDiary) => {
    axios
      .patch(`http://localhost:3000/diaries/${id}`, updatedDiary)
      .then((response) => {
        setDiaries((prevDiaries) =>
          prevDiaries.map((diary) => (diary.id === id ? response.data : diary))
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <CreateDiary onAddDiary={handleAddDiary} onEdit={handleEdit} />

      <div>
        <h1>Check out the latest diaries</h1>
        <ul>
          {diaries.map((diary) => (
            <li key={diary.id}>
              <DiaryItem
                id={diary.id}
                onDelete={() => handleDelete(diary.id)}
                onEdit={handleEdit}
              />
              {/* 这里不能放 onDelete={handleDelete},因为会导致id数据不能成功导入 */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DiaryList;
