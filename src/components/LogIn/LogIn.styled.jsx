import styled from "styled-components";

export const DivLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: auto;
  margin: 15vh;
`;

export const ContainerTitleForm = styled.p`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 30px;
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
`;
