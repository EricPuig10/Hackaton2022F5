import styled from "styled-components";

export const DivFooter = styled.div`
  background-color: var(--nav-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1%;
  height: 9vh;
  width: 80%;
  margin-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 10000;
  position: relative;
  bottom: 0%;
  left: 0%;
  @media (max-width: 450px) {
   display: none;
  }
`;
