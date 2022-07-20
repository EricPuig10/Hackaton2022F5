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
    padding-top: 10%;
    flex-direction: column;
    width: 100%;
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
  @media (max-width: 450px) {
    width: 90%;
    margin-left:8%;
  }
`;

export const TextInfo = styled.p`
  font-size: 1.4em;
  @media (max-width: 450px) {
    font-size:1.6em;
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
  width: 80%;
  height: 30%;
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
    font-size:1.6em;
  }
`;

export const SubmitBtn = styled.button`

`
