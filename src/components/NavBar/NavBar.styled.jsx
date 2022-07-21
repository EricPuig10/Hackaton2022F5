import styled from "styled-components";

export const DivNavBar = styled.div`
  background-color: var(--nav-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1%;
  height: 9vh;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 10000;
  position: fixed;
  top: 0%;
  left: 0%;
  @media (max-width: 450px) {
    height: 8vh;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const DivLogo = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2%;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  @media (max-width: 450px) {
    margin-left: -10%;
  }
`;

export const Title = styled.h1`
  color: black;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }
`;

export const DivSearcher = styled.div`
    display: flex;
    position: fixed;
    top:4.6%;
    left:27%;
    z-index: 10000;
    cursor: pointer;
  @media (max-width: 450px) {
    display: flex;
    position: fixed;
    top:3.8%;
    left:50%;
    z-index: 10000;
  }
`;

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  align-items: center;
  height: 100%;
  @media (max-width: 450px) {
    width: 30%;
    /* display: none; */
  }
`;

export const LoginBtn = styled.button`
  border: 2px solid grey;
  background-color: transparent;
  padding: 8%;
  padding-left: 12%;
  padding-right: 12%;
  border-radius: 2vw;
  font-weight: bold;

  &:hover {
    background-color: #ffffff;
  }
  @media (max-width: 450px) {
    height: 60%;
    width: 100%;
    font-size: 1.2em;
    margin-left: 8%;
  }
`;
