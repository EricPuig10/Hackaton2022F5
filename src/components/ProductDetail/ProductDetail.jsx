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
  TextInfo,
} from "./ProductDetail.styled";
import { useParams } from "react-router-dom";

import { userServices } from "../../services/userServices";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMomentById(id);
    getUserById(id);
  }, [id]);

  const getMomentById = (id) => {
    productServices.getProductById(id).then((res) => {
      setProduct(res);
    });
  };

  const getUserById = (id) => {
    userServices.getUserById(id).then((res) => {
      setUser(res);
    });
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
            <TextInfo>Autor: {user.name}</TextInfo>

            <DivForm>
              <InputMessage placeholder="Contacta conmigo" maxLength="60" />
            </DivForm>
          </DivInfo>
        </DivMainDetail>
      </Main>
    </>
  );
};
