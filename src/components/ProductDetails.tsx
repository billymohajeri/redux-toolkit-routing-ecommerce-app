import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state; 

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text"><strong>Category:</strong> {product.category}</p>
              <p className="card-text"><strong>Description:</strong> {product.description}</p>
              <p className="card-text"><strong>Price:</strong> ${product.price}</p>
              <p className="card-text"><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
              <p className="card-text"><small className="text-muted">Product ID: {product.id}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
