import styled from "styled-components";

export const DivLogIn = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  width: 80vw;
  height: auto;
  margin: 15vh;

  .create containerTitleForm p {
    font-size: 20px;
    color: #f1356d;
    margin-bottom: 30px;
  }
  .create inputForm input {
    width: 80%;
    padding: 6px 10px;
    margin-top: 10px;
    border: 5px;
    box-sizing: border-box;
    display: block;
  }
  .containerBtn button {
    background-color: var(--nav-color);
    color: #ffffff;
    border: 5px;
    display: flex;
    margin-top: 10px;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    align-items: start;
    height: 8vh;
    padding-left: 10%;
    padding-right: 10%;
  }
  
  
`;