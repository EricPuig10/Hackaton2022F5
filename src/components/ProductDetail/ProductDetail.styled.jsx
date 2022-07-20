import styled from "styled-components";

export const Main = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DivMainDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #ffffff;
  margin-top: 2%;
`;
export const DivCard = styled.div`
  margin-top: 8%;
  width: 50%;
  height: 75%;
  display: flex;
  justify-content: center;
`;

export const DivInfo = styled.div`
  width: 50%;
  height: 60%;
  margin-top: -2%;
`;

export const TextInfo = styled.p`
  font-size: 1.4em;
`;

export const CardImg = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
`;

export const DivForm = styled.form`
  width: 80%;
  height: 30%;
`;

export const InputMessage = styled.textarea`
  padding: 4%;
  width: 100%;
  height: 70%;
  border-radius: 2vw;
  max-height: 150px;
  max-width: 400px;
  min-height: 50px;
  min-width: 200px;
`;
