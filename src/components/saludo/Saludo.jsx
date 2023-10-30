import styles from "./saludo.module.css";

export default function Saludo(texto) {
  return (
    <div className={styles.itemConteiner}>
      {(texto = "Bienvenidos a React")}
    </div>
  );
}
