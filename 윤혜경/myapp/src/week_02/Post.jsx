import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentContainer: {
    width: "400px",
    margin: 10,
    padding: 10,
    border: "1px solid grey",
    borderRadius: 16,
    cursor: "pointer",
  },
  titleText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  nicknameText: {
    color: "grey",
  },
  contentText: {
    marginTop: 15,
  },
};

function Post(props) {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper} onClick={() => navigate(`/post/${props.id}`)}>
      <div style={styles.contentContainer}>
        <div style={styles.titleText}>{props.title}</div>
        <div style={styles.nicknameText}>{props.nickname}</div>
        <div style={styles.contentText}>{props.content}</div>
      </div>
    </div>
  );
}

export default Post;