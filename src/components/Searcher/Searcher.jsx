// import React, { useEffect, useState } from "react";
// import { productServices } from "../../services/productServices";
// import Data from "../NavBar/data.json";
// import { ProductsList } from "../ProductsList";
// import {
//   ContainerProductsSearcher,
//   DivSearcher,
//   DivWithoutSearchingResults,
//   ImgProductContSearched,
//   ImgProductSearched,
//   MomentCardDivSearched,
//   ProductCardDivSearched,
//   SearchInput,
// } from "./Searcher.styled";

// const Searcher = (props) => {
//   //   const [filterValue, setFilterValue] = useState([]);

//   //   const handleSearch = (event) => {
//   //     const searchValue = event.target.value;
//   //     const filterArray = props.Data.filter((e) => {
//   //       return e.title.toLowerCase().includes(searchValue.toLowerCase());
//   //     });
//   //     if (searchValue === "") {
//   //       setFilterValue([]);
//   //     } else {
//   //       setFilterValue(filterArray);
//   //     }
//   //   };
//   const [suggestions, setSuggestions] = useState([]);
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const getAllProducts = () => {
//     productServices.getAllProducts().then((res) => {
//       setProducts(res);
//     });
//   };

//   const searchProduct = (data) => {
//     productServices.searchProduct(data).then((res) => {
//       if (res) {
//         setSuggestions(res);
//       }
//     });
//   };

//   const cancelSearch = () => {
//     console.log("search canceled");
//     setSuggestions([]);
//     setSearch("");
//   };

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//     searchProduct(search);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     searchProduct(search);
//   };

//   return (
//     <>
//       <SearchInput
//         type="text"
//         placeholder={props.Placeholder}
//         onChange={handleSearch}
//       />
//       <div className="searchList">
//         {filterValue.length !== 0 &&
//           filterValue.map((e) => {
//             return <p>{e.title}</p>;
//           })}
//       </div>
//       <SearchInput
//         onChange={handleChange}
//         typeof="search"
//         name="search"
//         placeholder="Search"
//         value={search}
//       />

//       <ContainerProductsSearcher>
//         {search === "" ? (
//           <>
//             <ProductsList />
//           </>
//         ) : (
//           <>
//             {suggestions.length < 1 ? (
//               <DivWithoutSearchingResults>
//                 Sorry, we did not found "{search}"
//               </DivWithoutSearchingResults>
//             ) : (
//               <>
//                 {suggestions.map((product, key) => (
//                   <ProductCardDivSearched key={key}>
//                     <ImgProductContSearched>
//                       <ImgProductSearched src={product.imgUrl} />
//                     </ImgProductContSearched>
//                   </ProductCardDivSearched>
//                 ))}
//               </>
//             )}
//           </>
//         )}
//       </ContainerProductsSearcher>
//     </>
//   );
// };
// export default Searcher;
