import React, { useState, useEffect } from "react";
// import DiaryItem from "./DiaryItem";
import axios from "axios";

function DeleteDiary({ id, onDelete }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/diaries/${id}`)
      .then(() => {
        onDelete(id);
      })
      .catch((error) => console.error(error));
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteDiary;
