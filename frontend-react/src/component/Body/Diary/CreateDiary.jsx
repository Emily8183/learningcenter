import React, { useState } from "react";
import axios from "axios";

// https://charisol.io/how-to-build-a-crud-app-with-react-and-restful-apis/

function CreateDiary({ onAddDiary }) {
  const [newDiary, setNewDiary] = useState({
    title: "",
    content: "",
  });

  function handleTextChange(event) {
    //const { name, value } = event.target;
    //deconstructure
    //相当于
    //const name = event.target.name;
    //const value = event.target.value;
    //React 16及之前的老版本，event.target必须在setState外部使用（原因：synthetic event)
    //新版本不需要

    setNewDiary((prevDiary) => {
      return {
        ...prevDiary,
        [event.target.name]: event.target.value,
      };
    });
    //在原来state的基础上增添键值对
  }

  function submitDiary(event) {
    event.preventDefault();
    //阻止默认事件，即提交表单后页面不会刷新

    axios
      .post("http://localhost:3000/diaries", newDiary)
      .then((response) => {
        onAddDiary(response.data); //调用回调函数
        setNewDiary({ title: "", content: "" }); //重置表单,它会将 diary 的 title 和 content 字段重置为空字符串。这意味着表单中的输入框会被清空，准备好让用户输入新的日记条目。
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <form onSubmit={submitDiary}>
        <input
          type="text"
          name="title"
          value={newDiary.title}
          onChange={handleTextChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
          value={newDiary.content}
          onChange={handleTextChange}
          placeholder="What I have learned today..."
          rows="3"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateDiary;
