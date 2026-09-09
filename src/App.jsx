import ProductCard from "./components/ProductCard";
import styles from "./App.module.scss";

const images = [
  "https://picsum.photos/id/1060/300/200",
  "https://picsum.photos/id/292/300/200",
  "https://picsum.photos/id/431/300/200",
  "https://picsum.photos/id/225/300/200",
];

const products = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Croissant" },
  { id: 3, name: "Cheesecake" },
  { id: 4, name: "Lemonade" },
];

function App() {
  return (
    <div className={styles.shop}>
      <h1>Coffee Shop</h1>

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            images={images}
          />
        ))}
      </div>
    </div>
  );
}

export default App;