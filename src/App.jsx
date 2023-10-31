import "./App.css";
import Nav from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="divLista">
        <ItemListContainer producto="Lavarropas" id="1" precio="120000" />
        <ItemListContainer producto="Heladera" id="2" precio="500000" />
      </div>
    </div>
  );
}

export default App;
