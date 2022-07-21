import styled from "styled-components";

export const DivLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: auto;
  margin: 15vh;
  @media (max-width: 450px) {
    margin: 8%;
    padding-top: 8%;
    margin-left: 10%;
  }
`;

export const ContainerTitleForm = styled.h3`
  font-size: 18px;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 450px) {
    padding: 10px 20px;
    font-size: 1.4em;

  }
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-top: 10px;
  border: 2px solid grey;
  box-sizing: border-box;
  display: block;
  border-radius: 2vw;
  font-size: 1em;
  @media (max-width: 450px) {
    padding: 18px 30px;
    font-size: 1.5em;
  }
`;

export const ContainerButton = styled.div`
  background-color: white;
  color: #ffffff;
  border: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  margin-top: 5%;
  @media (max-width: 450px) {
    align-items: start;
    height: 8vh;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const BtnSend = styled.button`
  display: flex;
  border-radius: 2vw;
  background-color: var(--nav-color);
  border: none;
  cursor: pointer;
  padding: 12px 20px;
  @media (max-width: 450px) {
    padding: 20px 40px;
    font-size: 1.6em;
  }
`;
