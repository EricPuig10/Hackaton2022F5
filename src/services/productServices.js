import axios from "axios";
const baseURL = "http://localhost:8080";

// export const fakeProducts = [
//   {
//     id: 1,
//     nome: "El grito",
//     tipo: "pinturas",
    
//   },
//   {
//     id: 2,
//     nome: "David",
//     tipo: "escultura",
    
//   },
//   {
//     id: 3,
//     nome: "Meninas",
//     tipo: "pinturas",
//   },
//   {
//     id: 4,
//     nome: "Foto famosa",
//     tipo: "fotografias",
//   }
// ];

export const productServices = {
  
  // getFakeProducts(){
  //   const productsList = fakeProducts;
  //   return productsList;
  // },


  getAllProducts() {
    const products = axios.get(baseURL + "/products").then((res) => res.data);
    return products;
  },

  getProductById(id) {
    const product = axios
      .get(baseURL + "/products/" + id)
      .then((res) => res.data);
    return product;
  },

  searchProduct(search) {
    const products = axios
      .get(`${baseURL}/products?search=${search}`)
      .then((res) => {
        return res.data;
      });
    return products;
  },

  filterProduct(filter) {
    let filtredProduct = this.getAllProducts().filter(product => product.category === filter);
    return filtredProduct;
  },

}
