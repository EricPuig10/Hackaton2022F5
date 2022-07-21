import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  width: 14%;
  height: 320px;
  margin: 1%;
  flex-direction: column;
  border-radius: 2vw;
  border: 1px solid grey;
  position: relative;
  background-color: var(--card-color);
  &:hover {
    box-shadow: 0 0 10px grey;
  }
  @media (max-width: 1150px) {
    width: 20%;
  }
  @media (max-width: 850px) {
    width: 30%;
  }
  @media (max-width: 750px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    border-color: var(--card-color);
    height: auto;
    border-style: solid;
    display: flex;
    align-items: center;
    width: 90%;
    flex-direction: column;
    margin: 1%;
    margin-left: 3%;
    margin-bottom: 2%;
    position: relative;
    border-radius: 1.5vw;
  }
`;

export const ImgDiv = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  @media (max-width: 450px) {
    height: 300px;
    width: 100%;
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
  @media (max-width: 450px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  text-decoration: none;
  @media (max-width: 450px) {
    height: 170px;
  }
`;

export const TitleProduct = styled.h2`
  font-size: 1em;
  margin-bottom: 0%;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 1.5em;
  }
`;

export const CategoryProduct = styled.h3`
  font-size: 0.8em;
  @media (max-width: 450px) {
    font-size: 1.3em;
  }
`;

export const PriceProduct = styled.h3`
  font-size: 1em;
  margin-top: -1%;
  padding-bottom: 1%;
  @media (max-width: 450px) {
    font-size: 1.4em;
    padding: 0%;
  }
`;

export const UserProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  height: 10%;
  padding: 1%;
  padding-bottom: 4%;

  @media (max-width: 450px) {
  }
`;

export const NameUser = styled.p`
  font-size: 1.15em;
  font-weight: bold;
  margin: 0;
  margin-bottom: -4%;
`;

export const ImageUserDiv = styled.div`
  width: 17%;
  margin: 1%;
  height: 90%;
  border-radius: 50%;
`;

export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const NameUserDiv = styled.div`
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;
