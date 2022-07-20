import { Link } from "react-router-dom";
import {
  CardDiv,
  CategoryProduct,
  ImageUser,
  ImageUserDiv,
  ImgDiv,
  ImgProduct,
  NameUser,
  NameUserDiv,
  PriceProduct,
  TextDiv,
  TitleProduct,
  UserProductDiv,
} from "./Product.styled";

export const Product = ({ product }) => {
  return (
    <CardDiv>
      <ImgDiv>
        <ImgProduct src={product.img} />
      </ImgDiv>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${product.id}`}
      >
        <TextDiv>
          <TitleProduct>{product.name}</TitleProduct>
          <CategoryProduct>{product.category}</CategoryProduct>
          <PriceProduct>{product.price}€</PriceProduct>
        </TextDiv>
      </Link>
      <UserProductDiv>
        <ImageUserDiv>
          <ImageUser src={product.seller.img} />
        </ImageUserDiv>

        <NameUserDiv>
          <NameUser>{product.seller.userName}</NameUser>
        </NameUserDiv>
      </UserProductDiv>
    </CardDiv>
  );
};
