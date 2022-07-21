import "./components/main.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Sell } from "./pages/Sell";

function App() {
  return 
    <>
      <Home />
      <Register/>
      <Sell/>
      <NavBar/>
    </>;
}

export default App;
