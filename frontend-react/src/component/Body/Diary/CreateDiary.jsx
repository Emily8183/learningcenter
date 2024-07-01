import React, { useState } from "react";

function CreateDiary() {
  const [diary, setDiary] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;

    //deconstructure
    //相当于
    //const name = event.target.name;
    //const value = event.target.value;
    //记住必须在set state外面assign event.target，不能在setDiary内使用（原因：synthetic event)

    setDiary((prevDiary) => {
      return {
        ...prevDiary,
        [name]: value,
      };
    });
    //在原来state的基础上增添键值对
  }

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
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateDiary;
