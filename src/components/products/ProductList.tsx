import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../store/store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.productR.products);

  return (
    <div>
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      <ul className="list-group px-5">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${product.id}`}
              className="list-group-item list-group-item-action list-group-item-primary"
              aria-current="true"
              state={product}
            >
              <b>{product.category}</b>: {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
