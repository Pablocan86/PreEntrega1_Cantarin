import estilos from "./nav.module.css";
import reactLogo from "../assets/react.svg";
import CartWidget from "./carrito";

export default function navBar() {
  return (
    <>
      <nav className={estilos.navegador}>
        <div>
          <img className={estilos.logoReact} src={reactLogo} alt="" />
          <h1 className={estilos.nombreTienda}>Tienda Fitness</h1>
        </div>

        <ul>
          <li>
            <a href="" rel="noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="" rel="noreferrer">
              Nosotros
            </a>
          </li>
          <li>
            <a href="" rel="noreferrer">
              Productos
            </a>
          </li>
          <li>
            <a href="" rel="noreferrer">
              Contacto
            </a>
          </li>
        </ul>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}
