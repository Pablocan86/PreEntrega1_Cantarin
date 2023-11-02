import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import Nav from "./components/NavBar";
function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="divLista">
        <ItemListContainer greeting={"Bienvenidos"} />
      </div>
    </div>
  );
}

export default App;
