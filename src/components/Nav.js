// import Home from "./Home";
// import {Link} from "react-router-dom"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="li-a">
        <Link to="/Home">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/product">
          {" "}
          <li>Product</li>
        </Link>
        <Link to="/Users">
          {" "}
          <li>Users</li>
        </Link>
        <Link to="/Contect">
          {" "}
          <li>Contact</li>
        </Link>
        <Link to="/">
          {" "}
          <li>Logout</li>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
