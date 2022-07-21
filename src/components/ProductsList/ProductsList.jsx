import {
  ContainerProducts,
  DivWithoutSearchingResults,
  SearchInput,
} from "./ProductsList.styled";
import { Product } from "../Product/Product";
import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import { DivSearcher } from "../NavBar/NavBar.styled";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");
  const [buttonClicked, setButtonClicked] = useState(true);

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

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
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
      <DivSearcher onClick={handleButtonClick}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </DivSearcher>

      {buttonClicked ? (
        <SearchInput
          onChange={handleChange}
          typeof="search"
          name="search"
          placeholder="Search"
          value={search}
        />
      ) : (
        ""
      )}

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
