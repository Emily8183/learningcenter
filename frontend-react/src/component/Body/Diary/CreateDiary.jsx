import React, { useState } from "react";

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

  // function submitDiary(event) {
  //   event.preventDefault();
  //   //阻止默认事件，即提交表单后页面不会刷新
  //   //console.log(diary);
  //   fetch("http://localhost:3000/diaries", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(diary),
  //   })
  //     .then((response) => response.json())
  // }

  return (
    <div>
      <form>
        <input
          type="tex"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
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
