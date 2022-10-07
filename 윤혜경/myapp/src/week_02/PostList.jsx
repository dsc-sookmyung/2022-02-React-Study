import React from "react";
import Comment from "./Post";

const posts = [
  {
    nickname: "김눈송",
    title: "배가 고프다",
    content: "저녁으로 몬플에서 샐러드파스타 먹었더니 배고프다...",
  },
  {
    nickname: "이눈송",
    title: "곧 집에 간다!",
    content: "리액트 입문 과제 끝내고 바로 집에 가야지",
  },
  {
    nickname: "박눈송",
    title: "현재 시간은 오후 10시 반",
    content: "일기 쓰는 것 같다!",
  },
  {
    nickname: "최눈송",
    title: "라면이 너무 먹고 싶다",
    content: "그치만 시간이 너무 늦었는걸...",
  },
  {
    nickname: "정눈송",
    title: "GDSC Sookmyung 스터디",
    content: "React 스터디 짱",
  },
];

function PostList(props) {
    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <Post key={index} nickname={post.nickname} title={post.title} content={post.content} />
                );
            })}
        </div>
    );
};

export default PostList;