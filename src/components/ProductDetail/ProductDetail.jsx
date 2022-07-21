import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import {
  CardImg,
  DivCard,
  DivForm,
  DivInfo,
  DivMainDetail,
  Main,
  SubmitBtn,
  TextInfo,
} from "./ProductDetail.styled";
import { useParams } from "react-router-dom";
import { messageServices } from "../../services/messagesServices";
import InputEmojiWithRef from "react-input-emoji";

export const ProductDetail = () => {
  const [product, setProduct] = useState({ messages: [] });
  // eslint-disable-next-line
  const [user, setUser] = useState();
  const [userName, setUserName] = useState("");
  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    getProductById(id);
    getMessagesByProduct(id);
  }, [id]);

  const getProductById = (id) => {
    productServices.getProductById(id).then((res) => {
      setProduct(res);
      setUser(res.seller);
      setUserName(res.seller.userName);
    });
  };

  const getMessagesByProduct = (id) => {
    messageServices.getMessagesByProductId(id).then((res) => {
      setMessages(res);
    });
  };

  const addNewMessage = (data) => {
    messageServices.createMessage(data).then((res) => {
      setMessages([...messages, res]);
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newMessage = { message: text, productId: product.id };
    if (text.length < 1) {
      return;
    }
    addNewMessage(newMessage);
    window.alert(`Your message have been sent`);
    resetInputsForm();
  };

  const resetInputsForm = () => {
    setText("");
  };

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

            <DivForm>
              <SubmitBtn onClick={onSubmitHandler}>
                <i className="fa-regular fa-paper-plane fa-xl"></i>
              </SubmitBtn>
              <InputEmojiWithRef
                fontSize={22}
                value={text}
                type="text"
                maxLength="254"
                onChange={setText}
                placeholder="Type a message..."
              />
            </DivForm>
          </DivInfo>
        </DivMainDetail>
      </Main>
    </>
  );
};
