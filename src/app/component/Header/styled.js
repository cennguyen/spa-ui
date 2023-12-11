import styled from "styled-components";

const Dash = styled.span`
  background: #000;
  width: 100%;
  height: 1px;
  position: absolute;
  margin-bottom: 1px;
`;

const HeaderContainer = styled.div`
    padding: 10px;
    float: right;
`;

const Wrapper = styled.div`
    margin-bottom: 10px;
    height: 66px;
    border-bottom: 1px solid black;
`;

export {
  HeaderContainer,
  Dash,
  Wrapper
}