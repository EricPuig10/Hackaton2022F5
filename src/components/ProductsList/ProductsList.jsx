import {
  ContainerProducts,
  DivWithoutSearchingResults,
  SearchInput,
} from "./ProductsList.styled";
import { Product } from "../Product/Product";
import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    productServices.getAllProducts().then((res) => {
      setProducts(res);
    });
  };
  const searchProduct = (data) => {
    productServices.searchProduct(data).then((res) => {
      if (res) {
        setSuggestions(res);
      }
    });
  };

  //   const cancelSearch = () => {
  //     console.log("search canceled");
  //     setSuggestions([]);
  //     setSearch("");
  //   };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchProduct(search);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     searchProduct(search);
  //   };

  return (
    <ContainerProducts>
      <SearchInput
        onChange={handleChange}
        typeof="search"
        name="search"
        placeholder="Search"
        value={search}
      />
      {search === "" ? (
        <>
          {products.map((product, key) => (
            <Product product={product} key={key} />
          ))}
        </>
      ) : (
        <>
          {suggestions.length < 1 ? (
            <DivWithoutSearchingResults>
              Sorry, we did not found "{search}"
            </DivWithoutSearchingResults>
          ) : (
            <>
              {suggestions.map((product, key) => (
                <Product product={product} key={key} />
              ))}
            </>
          )}
        </>
      )}
    </ContainerProducts>
  );
};
