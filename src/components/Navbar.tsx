import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-end bg-dark">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Link
          </a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
