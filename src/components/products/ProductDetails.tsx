import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.productR.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <div className="container mt-5">Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {product.rating.rate} (
                {product.rating.count} reviews)
              </p>
              <p className="card-text">
                <small className="text-muted">Product ID: {product.id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
