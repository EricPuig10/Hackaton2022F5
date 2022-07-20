import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <ProductsList />
      <Footer />
    </div>
  );
};
