import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.productR.products);
  return (
    <div>
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      {/* <h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1> */}
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

{
  /* <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
</div> */
}
