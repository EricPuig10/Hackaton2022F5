import styled from "styled-components";

export const DivCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerProducts = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 6%;
  height: 100vh;
  @media (max-width: 450px) {
    margin: 0;
    width:100%;
    display: flex;
    justify-content: center;
  }
`