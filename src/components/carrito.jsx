import estilos from "./nav.module.css";
import carritoLogo from "../assets/carrito.svg";

export default function CartWidget() {
  return (
    <>
      <div className={estilos.divCarrito}>
        <a href="" rel="noreferrer">
          <img className={estilos.carrito} src={carritoLogo} alt="" />
        </a>
        <p className={estilos.pCantidad}>0</p>
      </div>
    </>
  );
}
