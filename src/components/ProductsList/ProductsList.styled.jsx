import styled from "styled-components";

export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerProducts = styled.div`
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 6%;
  padding-top: 5%;
  padding-bottom: 5.7%;
  @media (max-width: 450px) {
    padding-top: 34%;
    padding-bottom: 15%;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  height: 6px;
  width: 30%;
  border-radius: 2vw;
  padding: 1%;
  border: none;
  padding-left: 2%;
  position: fixed;
  top: 2%;
  left: 30%;
  z-index: 100000;
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    top: 10%;
    padding-top: 4%;
    padding-bottom: 4%;
    border: 2px solid grey;
    width: 90%;
    left:3%;
    font-size: 1.4em;
  }
`;

export const ContainerProductsSearcher = styled.div`
  background-color: var(--white);
  padding-left: 8%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5%;
  width: 80%;
  @media (max-width: 450px) {
    padding-top: 8%;
    padding-bottom: 25%;
    margin: 0;
    width: 100%;
    margin-right: 4%;
  }
`;

export const DivWithoutSearchingResults = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 57vh;
`;

export const ProductCardDivSearched = styled.div`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  width: 15%;
  flex-direction: column;
  margin: 1%;
  margin-left: 5%;
  margin-bottom: 2%;
  border-radius: 1.5vw;
  @media (max-width: 1020px) {
    width: 25%;
    border-color: var(--white);
  }
  @media (max-width: 790px) {
    width: 30%;
    border-color: var(--white);
  }
  @media (max-width: 650px) {
    width: 80%;
    border-color: var(--white);
  }
  @media (max-width: 450px) {
    width: 20%;
    border-color: var(--white);
    margin: 0;
    margin-bottom: 0%;
    margin-left: 2%;
  }
`;

export const ImgProductContSearched = styled.div`
  border: none;
  height: 150px;
  position: relative;

  @media (max-width: 450px) {
    height: 100px;
  }
`;

export const ImgProductSearched = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5vw;
  object-fit: cover;
`;
