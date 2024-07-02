import React, { useState } from "react";
import axios from "axios";

function CreateDiary() {
  const [diary, setDiary] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    //const { name, value } = event.target;
    //deconstructure
    //相当于
    //const name = event.target.name;
    //const value = event.target.value;
    //React 16及之前的老版本，event.target必须在setState外部使用（原因：synthetic event)
    //新版本不需要

    setDiary((prevDiary) => {
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

    // fetch("http://localhost:3000/diaries", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(diary),
    // })
    axios
      .post("http://localhost:3000/diaries", diary)
      .then((response) => {
        console.log(response.data); //打印响应数据
        setDiary({ title: "", content: "" }); //重置表单,它会将 diary 的 title 和 content 字段重置为空字符串。这意味着表单中的输入框会被清空，准备好让用户输入新的日记条目。
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={diary.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
          value={diary.content}
          onChange={handleChange}
          placeholder="What I have learned today..."
          rows="3"
        />
        <button onClick={submitDiary}>Create</button>
      </form>
    </div>
  );
}

export default CreateDiary;
