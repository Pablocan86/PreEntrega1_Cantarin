import estilos from "./nav.module.css";
import reactLogo from "../assets/react.svg";
import CartWidget from "./carrito";
import { useState } from "react";
import Saludo from "./saludo/Saludo";

export default function navBar() {
  const [texto, setTexto] = useState("");

  return (
    <>
      <nav className={estilos.navegador}>
        <img className={estilos.logoReact} src={reactLogo} alt="" />

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
      <Saludo>{texto}</Saludo>
    </>
  );
}
