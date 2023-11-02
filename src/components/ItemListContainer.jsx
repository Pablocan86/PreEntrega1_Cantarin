import styles from "./itemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return <h2 className={styles.h2Greeting}>{greeting}</h2>;
};
