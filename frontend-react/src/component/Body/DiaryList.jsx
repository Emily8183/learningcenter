import React, { useEffect, useState } from "react";
import axios from "axios";

function DiaryList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("There's an error fetching the posts!", error);
      });
  }, []);

  return (
    <div>
      <h1>Check out the latest diaries</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiaryList;
