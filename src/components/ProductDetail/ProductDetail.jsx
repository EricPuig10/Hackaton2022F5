import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import {
  CardImg,
  DivCard,
  DivForm,
  DivInfo,
  DivMainDetail,
  InputMessage,
  Main,
  SubmitBtn,
  TextInfo,
} from "./ProductDetail.styled";
import { useParams } from "react-router-dom";

import { userServices } from "../../services/userServices";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState();
  const [userName, setUserName] = useState("");
  const { id } = useParams();

  const [messages, setMessages] = useState({ message: "" });

  useEffect(() => {
    getMomentById(id);
  }, [id]);

  const getMomentById = (id) => {
    productServices.getProductById(id).then((res) => {
      setProduct(res);
      setUser(res.seller);
      setUserName(res.seller.userName);
    });
  };

  //   const getUserById = (id) => {
  //     userServices.getUserById(id).then((res) => {
  //       setUser(res);
  //     });
  //   };

  const valueToState = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(JSON.stringify(messages, null, 1));
    setMessages({ ...messages, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //addNewMessage(messages)
    window.alert(`Your message have been sent`);
    resetInputsForm();
  };

  const addNewMessage = (data) => {
    // messagesServices.addMessage(data).then((res) => {
    //   setMessages([...messages, res]);
    // });
  };

  const resetInputsForm = () => {
    setMessages({message:""});
  };

  console.log(messages)
  return (
    <>
      <Main>
        <DivMainDetail>
          <DivCard>
            <CardImg src={product.img} />
          </DivCard>
          <DivInfo>
            <TextInfo>Título: {product.name}</TextInfo>
            <TextInfo>Categoría: {product.category}</TextInfo>
            <TextInfo>Descripción: {product.description}</TextInfo>
            <TextInfo>Precio: {product.price} € </TextInfo>
            <TextInfo>Autor: {userName}</TextInfo>

            <DivForm onSubmit={onSubmitHandler}>
              <InputMessage
                name="message"
                placeholder="Contacta conmigo"
                maxLength="60"
                onChange={valueToState}
              />
              <SubmitBtn type="submit">Enviar</SubmitBtn>
            </DivForm>
          </DivInfo>
        </DivMainDetail>
      </Main>
    </>
  );
};
