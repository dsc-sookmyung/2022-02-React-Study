import { Link } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "black",
    fontSize: "15pt",
    display: "flex",
    flexdirection: "column",
    justifyContent: "space-between",
    padding: "10px 30px",
    marginBottom: 10,
    borderBottom: "1px solid grey",
  },
  link: {
    color: "white",
  },
};

function Navigation() {
  return (
    <div style={styles.container}>
      <Link to={`/`}>
        <div style={styles.link}>My Blog!</div>
      </Link>
      <Link to={`/mypage`}>
        <div style={styles.link}>mypage</div>
      </Link>
    </div>
  );
}

export default Navigation;
