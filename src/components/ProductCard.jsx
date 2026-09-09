import styles from "./ProductCard.module.scss";

function ProductCard({ id, name, images }) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const image = images[randomIndex];

  function handleClick() {
    console.log(id, name);
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <button className={styles.button} onClick={handleClick}>
        Buy now
      </button>
    </div>
  );
}

export default ProductCard;