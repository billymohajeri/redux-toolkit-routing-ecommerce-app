import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Information</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Billy Mohajeri</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Email</h5>
          <p className="card-text">billy.mohajeri@integrify.io</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">GitHub</h5>
          <p className="card-text">
            <a
              href="https://github.com/billymohajeri"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/billymohajeri
            </a>
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
