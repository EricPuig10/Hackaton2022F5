import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import {
  CardImg,
  DivCard,
  DivInfo,
  DivMainDetail,
  MainDiv,
  TextInfo,
} from "./ProductDetail.styled";
import { Link, useParams } from "react-router-dom";
import { Product } from "../Product/Product";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMomentById(id);
  }, [id]);

  const getMomentById = (id) => {
    productServices.getProductById(id).then((res) => {
      setProduct(res);
    });
  };
  return (
    <>
      <DivMainDetail>
        <DivCard>
          <CardImg src={product.img} />
        </DivCard>
        <DivInfo>
          <TextInfo>Título: {product.name}</TextInfo>
          <TextInfo>Categoría: {product.category}</TextInfo>
          <TextInfo>Descripción: {product.description}</TextInfo>
          <TextInfo>Precio: {product.price} € </TextInfo>
          <TextInfo>Autor: {product.seller.name}</TextInfo>
        </DivInfo>
      </DivMainDetail>
    </>
  );
};
