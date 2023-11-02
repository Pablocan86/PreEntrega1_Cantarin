import estilos from "./nav.module.css";
import carritoLogo from "../assets/carrito.svg";

export default function CartWidget() {
  return (
    <>
      <div className={estilos.divCarrito}>
        <img className={estilos.carrito} src={carritoLogo} alt="" />
        <span className={estilos.pCantidad}>0</span>
      </div>
    </>
  );
}
