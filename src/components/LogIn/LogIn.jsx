import { DivLogIn} from "./LogIn.styled";

export const LogIn = () => {
  return (
    <>
    <DivLogIn>
    <div className="containerTitleForm">
          <p className="titleForm">Por favor introduce tus datos</p>
    </div>
    <form id="miFormulario">
        <div className="allInputs">
          <div className="inputForm">
            <input className="nameArtist" type="text" placeholder="Ingrese su alias"/>
          </div>
    
          <div className="inputForm">
            <input className="mobile" type="text" placeholder="Ingrese su teléfono"/>
          </div>

          <div className="inputForm">
            <input className="email" type="text" placeholder="Ingrese email de contacto"/>
          </div>
         
          <div className="inputForm">
            <input className="DNI" type="text" placeholder="Ingrese su DNI"/>
          </div>
    </div>
    <div className="containerBtn" >
       <button className="btnSend">Enviar datos</button>
    
    </div>

    </form> 
  </DivLogIn>
  </>
  );
};
