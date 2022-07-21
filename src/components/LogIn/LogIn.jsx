import { BtnSend, ContainerButton, ContainerTitleForm, DivLogIn, InputForm } from "./LogIn.styled";

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

            <InputForm type="text" placeholder="Ingrese su teléfono" />

            <InputForm type="text" placeholder="Ingrese email de contacto" />

            <InputForm type="text" placeholder="Ingrese su DNI" />
          </div>
          <ContainerButton>
            <BtnSend>Enviar datos</BtnSend>
          </ContainerButton>
        </form>
      </DivLogIn>
    </>
  );
};
