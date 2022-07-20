import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  width: 14%;
  margin: 1%;
  flex-direction: column;
  border-radius: 2vw;
  border: 1px solid grey;
  position: relative;
  background-color: var(--card-color);
  &:hover {
    box-shadow: 0 0 10px grey;
  }
  @media (max-width: 450px) {
    border-color: var(--card-color);
    border-style: solid;
    display: flex;
    align-items: center;
    width: 80%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  text-decoration: none;
`;

export const TitleProduct = styled.h2`
  font-size: 1em;
  margin-bottom: 0%;
`;

export const CategoryProduct = styled.h3`
  font-size: 0.8em;
`;

export const PriceProduct = styled.h3`
  font-size: 1em;
  margin-top: -1%;
  padding-bottom: 1%;
`;

export const UserProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  height: 10%;
  padding: 1%;
  padding-bottom: 0%;

  @media (max-width: 450px) {
    height: 8.3%;
  }
`;

export const NameUser = styled.p`
  font-size: 1.15em;
  font-weight: bold;
  margin: 0;
  margin-bottom: -4%;
`;

export const ImageUserDiv = styled.div`
  width: 14%;
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
