import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.productR.products);
  return (
    <div>
      <h2>List of all products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.category}</b>: {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
