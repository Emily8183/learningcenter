import React from "react";

function DiaryItem(props) {
  return (
    <div>
      <li>
        <h2>{props.diaryInfo.title}</h2>
        <p>{props.diaryInfo.content}</p>
      </li>
    </div>
  );
}

export default DiaryItem;
