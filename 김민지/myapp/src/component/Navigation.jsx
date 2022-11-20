import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  font-size: 15pt;
  display: flex;
  justify-content: space-between;
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
`;

const Login = styled.button`
  margin-right: 20px;
`;

function Navigation() {
  return (
    <Container>
      <Link to={`/`}>
        <HyperLink>My Blog!</HyperLink>
      </Link>
      <RightArea>
        <Login>Google Login</Login>
        <Link to={`/mypage`}>
          <HyperLink>mypage</HyperLink>
        </Link>
      </RightArea>
    </Container>
  );
}

export default Navigation;
