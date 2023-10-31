import styles from "./itemListContainer.module.css";

export const ItemListContainer = (props) => {
  const { producto, id, precio, imagen } = props;
  return (
    <div className={styles.divProductos}>
      <h2>{producto}</h2>
      <p>ID: {id}</p>
      <h4>Precio:{precio}</h4>
    </div>
  );
};
