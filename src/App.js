import "./components/main.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return 
    <>
      <Home />
      <Register/>
      <NavBar/>
    </>;
}

export default App;
