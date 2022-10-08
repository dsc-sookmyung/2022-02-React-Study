import React from "react";

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
  return (
    <div style={styles.wrapper}>
      <div style={styles.contentContainer}>
        <div style={styles.titleText}>{props.title}</div>
        <div style={styles.nicknameText}>{props.nickname}</div>
        <div style={styles.contentText}>{props.content}</div>
      </div>
    </div>
  );
}

export default Post;
