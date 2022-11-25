import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

function PostList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://gdsc-study-server.herokuapp.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} nickname={post.nickname} title={post.title} content={post.content} />;
      })}
    </div>
  );
}

export default PostList;
