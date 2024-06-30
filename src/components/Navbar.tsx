import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-end bg-dark">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/signin">
            Sign in
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
