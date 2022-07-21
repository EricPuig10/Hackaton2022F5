import styled from "styled-components";

export const DivSellForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: auto;
  margin: 15vh;
  margin-top: 3.5%;
  @media (max-width: 450px) {
    margin-top: 18%;
    margin-left: 8%;
  }
`;
export const ContainerTitleForm = styled.p`
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
`;

export const InputForm = styled.input`
  width: 80%;
  padding: 6px 10px;
  margin-top: 10px;
  border: 5px;
  box-sizing: border-box;
  display: block;
`;

export const Btn = styled.button`
  background-color: var(--nav-color);
  color: #ffffff;
  border: 5px;
  display: flex;
  margin-top: 10px;
  padding: 8px;
  border-radius: 2vw;
  cursor: pointer;
  @media (max-width: 450px) {
    align-items: start;
    padding: 16px;
    font-size: 1.2em;
  }
`;

export const Select = styled.select`
  width: 60%;
  padding: 12px 20px;
  margin-top: 10px;
  margin-left: 1%;
  border: 2px solid grey;
  box-sizing: border-box;
  display: flex;
  border-radius: 2vw;
  font-size: 1em;
  @media (max-width: 450px) {
    padding: 18px 30px;
    font-size: 1.5em;
  }
`;
export const DivSelects = styled.div`
  display: flex;
`;

export const TxtArea = styled.textarea`
  padding: 4%;
  margin-top: 2%;
  border-radius: 2vw;
  max-width: 350px;
  min-width: 350px;
  min-height: 80px;
  max-height: 80px;
`;
