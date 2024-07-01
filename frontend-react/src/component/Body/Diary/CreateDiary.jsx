import React from "react";

function CreateDiary() {
  return (
    <div>
      <form>
        <input type="tex" name="title" placeholder="Title" />
        <textarea
          typen="text"
          ame="content"
          placeholder="What I have learned today..."
          rows="3"
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateDiary;
