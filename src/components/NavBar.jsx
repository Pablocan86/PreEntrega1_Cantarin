import estilos from "./nav.module.css";
import reactLogo from "../assets/react.svg";
import CartWidget from "./carrito";

const hola = () => {
  console.log("HOLA");
};

export default function navBar() {
  return (
    <>
      <nav className={estilos.navegador}>
        <div>
          <img className={estilos.logoReact} src={reactLogo} alt="" />
          <h1 className={estilos.nombreTienda}>Tienda Fitness</h1>
        </div>

        <ul>
          <li onClick={hola}>Home</li>
          <li onClick={hola}>Nosotros</li>
          <li onClick={hola}>Productos</li>
          <li onClick={hola}>Contacto</li>
        </ul>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}
