import { ContainerTitleForm, DivSellForm} from "./SellForm.styled";

export const SellForm = () => {
  return (
    <>
    <DivSellForm>
    <ContainerTitleForm>
          <p className="titleForm">Por favor introduce tus datos</p>
    </ContainerTitleForm>
    <form id="miFormulario">
        <div className="allInputs">
          <div className="inputForm">
            <input className="nameclient" type="text" placeholder="Ingrese su nombre completo"/>
          </div>
    
          <div className="inputForm">
            <input className="mobile" type="text" placeholder="Ingrese su teléfono"/>
          </div>

          <div className="inputForm">
            <input className="email" type="text" placeholder="Ingrese email de contacto"/>
          </div>
         
          <div className="inputForm">
            <input className="direction" type="textarea" placeholder="Dirección de envio"/>
          </div>

            <select placeholder="Envío">
              <option value="fedex">Fedex</option>
              <option value="correos">Correos</option>
            </select>

            <select placeholder="Formas de Pago">
                <option value="paypal">Paypal</option>
                <option value="tarjeta">Tarjeta de débito o crédito</option>
                <option value="transferencia">Transferencia</option>
            </select>
            <textarea placeholder="comentarios"></textarea>
      
    </div>
    <div className="containerBtn" >
       <button className="btnSend">Enviar datos</button>
    
    </div>

    </form> 
  </DivSellForm>
  </>
  );
};
