import { React, useEffect, useState } from "react";
import axios from 'axios';
import Post from "./Post";

function PostList(props) {

  const [posts, setPosts] = useState([]);
  const server = "https://gdsc-study-server.herokuapp.com";
  
  useEffect(() => {
        axios.get(`${server}/posts`)
          .then((response)=>(setPosts(response.data)))
          .catch((error)=>(console.log(error)))
  }, [])

    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        nickname={post.nickname}
                        title={post.title}
                        content={post.content} />
                );
            })}
        </div>
    );
}

export default PostList;