import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import { ProductsList } from "../ProductsList/ProductsList";

export const FilterForCategory = () =>{
    const [filtredProducts, setFiltredProducts] = useState(null);
    useEffect(() => {
        setFiltredProducts(productServices.getAllProducts());
    }, []);

  function handleProduct(e) {
    let typeProduct = e.target.value;
    typeProduct !== "todo"
      ? setFiltredProducts(productServices.filterProduct(typeProduct))
      : setFiltredProducts(productServices.getAllProducts());}

      const buttons = [
        {
          name: "Todo",
          value: "todo"
        },
        {
          name: "Pinturas",
          value: "pinturas"
        },
        {
          name: "Escultura",
          value: "escultura"
        },
        {
          name: "Fotografias",
          value: "fotografias"
        }
      ];

    return (
        <>
        {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handleProduct}>
              {type.name}
            </button>
          </>
        ))}

      {filtredProducts &&
        filtredProducts.map(type => (
          <ProductsList key={type.id} />
        ))}
        </>
    )
    
}