import { Link } from "react-router-dom";
import {
  BtnSend,
  ContainerButton,
  ContainerTitleForm,
  DivLogIn,
  InputForm,
  Paragraph,
} from "./LogIn.styled";

export const LogIn = () => {
  return (
    <>
      <DivLogIn>
        <ContainerTitleForm>
          <p className="titleForm">Por favor introduce tus datos</p>
        </ContainerTitleForm>
        <form id="miFormulario">
          <div className="allInputs">
            <div className="inputForm">
              <InputForm
                className="nameArtist"
                type="text"
                placeholder="Ingrese su alias"
              />
            </div>

            <InputForm type="text" placeholder="Ingrese su contraseña" />
          </div>
          <Link to="/register">
            <Paragraph>Aún no estas registrado?</Paragraph>
          </Link>
          <ContainerButton>
            <BtnSend>Log In</BtnSend>
          </ContainerButton>
        </form>
      </DivLogIn>
    </>
  );
};
