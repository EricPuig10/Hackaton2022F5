import { ContainerProducts } from "./ProductsList.styled"
import { Link } from "react-router-dom";
import { Product } from "../Product/Product";
import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";



export const ProductsList = () =>{

const [products, setProducts] = useState([]);

useEffect(() => {
    getAllProducts();
  }, []);

const getAllProducts = () => {
    productServices.getAllProducts().then((res) => {
      setProducts(res);

    });
  };

return <ContainerProducts>
        {products.map((product, key) => (
          <Product product={product} key={key}/>
        ))}
</ContainerProducts>
}
