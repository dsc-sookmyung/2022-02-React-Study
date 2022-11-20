import { Link } from "react-router-dom";
import styled from "styled-components";
import GoogleBtn from "./GoogleBtn";

const Container = styled.div`
  background-color: black;
  font-size: 15pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
`;

const HyperLink = styled.div`
  color: white;
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Navigation() {
  return (
    <Container>
      <Link to={`/`}>
        <HyperLink>My Blog!</HyperLink>
      </Link>
      <RightArea>
        <GoogleBtn />
        <div style={{ width: "20px" }}></div>
        <Link to={`/mypage`}>
          <HyperLink>mypage</HyperLink>
        </Link>
      </RightArea>
    </Container>
  );
}

export default Navigation;
