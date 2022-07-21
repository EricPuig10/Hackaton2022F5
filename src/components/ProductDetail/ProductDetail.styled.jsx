import styled from "styled-components";

export const Main = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    height: auto;
  }
`;

export const DivMainDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #ffffff;
  margin-top: 2%;
  @media (max-width: 450px) {
    padding-top: 8%;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
export const DivCard = styled.div`
  margin-top: 8%;
  width: 50%;
  height: 75%;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    width: 100%;
    height: 35%;
  }
`;

export const DivInfo = styled.div`
  width: 50%;
  height: 60%;
  margin-top: -2%;
  margin-left: 3%;
  @media (max-width: 450px) {
    width: 90%;
    margin-left: 3%;
  }
`;

export const TextInfo = styled.p`
  font-size: 1.4em;
  margin-left: -10%;
  @media (max-width: 450px) {
    font-size: 1.6em;
    margin-left: 3%;
  }
`;

export const CardImg = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
  border: 2px solid var(--nav-color);
`;

export const DivForm = styled.form`
  width: 100%;
  height: 30%;
  display: flex;

  @media (max-width: 450px) {
    padding-left: 0;
    margin-left: 0%;
    margin-top: -8%;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const InputMessage = styled.textarea`
  padding: 4%;
  width: 100%;
  height: 55%;
  border-radius: 2vw;
  max-height: 100px;
  max-width: 400px;
  min-height: 50px;
  min-width: 200px;
  @media (max-width: 450px) {
    font-size: 1.6em;
  }
`;

export const SubmitBtn = styled.button`
  border-radius: 50%;
  border: 1px solid grey;
  margin-left: -10%;
  padding: 0.6%;
  margin-top: 4.5%;
  height: 44%;
  width: 7%;
  text-align: center;
  padding-left: 0;
  @media (max-width: 450px) {
    font-size: 1.4em;
    width: 20%;
    border-radius: 50%;
    margin-top: 2%;
    text-align: center;
    padding-left: 0;
  }
`;
