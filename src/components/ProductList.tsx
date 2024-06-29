import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.productR.products);
  return (
    <div>
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      <ul className="list-group px-5">
        {products.map((product) => (
          <li key={product.id}>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
              aria-current="true"
            >
              <b>{product.category}</b>: {product.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
