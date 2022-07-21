import { InputForm } from "../LogIn/LogIn.styled";
import {
  Btn,
  ContainerTitleForm,
  DivSelects,
  DivSellForm,
  Select,
  TxtArea,
} from "./SellForm.styled";

export const SellForm = () => {
  return (
    <>
      <DivSellForm>
        <ContainerTitleForm>
          <p className="titleForm">Por favor introduce tus datos</p>
        </ContainerTitleForm>
        <form id="miFormulario">
          <div className="allInputs">
            <InputForm type="text" placeholder="Ingrese su nombre completo" />
          </div>

          <div className="inputForm">
            <InputForm
              className="mobile"
              type="text"
              placeholder="Ingrese su teléfono"
            />
          </div>

          <div className="inputForm">
            <InputForm
              className="email"
              type="text"
              placeholder="Ingrese email de contacto"
            />
          </div>

          <div className="inputForm">
            <InputForm
              className="direction"
              type="textarea"
              placeholder="Dirección de envio"
            />
          </div>
          <DivSelects>
            <Select placeholder="Envío">
              <option value="fedex">Fedex</option>
              <option value="correos">Correos</option>
            </Select>

            <Select placeholder="Formas de Pago">
              <option value="paypal">Paypal</option>
              <option value="tarjeta">Tarjeta de débito o crédito</option>
              <option value="transferencia">Transferencia</option>
            </Select>
          </DivSelects>
          <TxtArea placeholder="Comentarios"></TxtArea>
        </form>
        <div className="containerBtn">
          <Btn className="btnSend">Enviar</Btn>
        </div>
      </DivSellForm>
    </>
  );
};
