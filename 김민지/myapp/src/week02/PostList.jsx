import React from "react";
import Post from "./Post";

const posts = [
  {
    nickname: "김눈송",
    title: "리액트 스터디 2주차",
    content: "오늘부터 스터디 2주차! 중요한 내용이니 열심히 공부해야지!!",
  },
  {
    nickname: "이눈송",
    title: "오늘은 개천절",
    content: "공휴일이지만 오프라인 수업을 다녀왔다..",
  },
  {
    nickname: "박눈송",
    title: "리덕스 스터디 2주차",
    content: "리덕스의 핵심 기능 및 실행 원리에 대해 배워보자!",
  },
  {
    nickname: "최눈송",
    title: "3년만에 청파제를 다녀오다",
    content: "다비치, 윤하 최고",
  },
  {
    nickname: "정눈송",
    title: "GDSC Sookmyung 스터디",
    content: "React 심화 스터디를 하기로 결정했다!",
  },
];

function PostList(props) {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            nickname={post.nickname}
            title={post.title}
            content={post.content}
          />
        );
      })}
    </div>
  );
}

export default PostList;
