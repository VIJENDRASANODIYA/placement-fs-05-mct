import { useEffect, useState } from "react";
import Nav from "./Nav";
function Product() {
  const [user, setUser] = useState([]);

  console.log(user);

  // const category = [
  //   "Electronics",
  //   "Jewellery",
  //   "MensClothing",
  //   "WomenClothing"
  // ];

  // const [categorydata, setcategoryData] = useState(category);
  // console.log(categorydata);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const elcHandle = () => {
    return fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const jeweHandle = () => {
    return fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const menHandle = () => {
    return fetch(
      "https://fakestoreapi.com/products/category/men%27s%20clothing"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const womenHandle = () => {
    return fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  return (
    <div>
      <div className="nav-div">
        <Nav />
      </div>
      <div className="d-flex">
        <div
          style={{
            flex: "2",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            boxShadow: "1px 2px 1px 1px black  "
          }}
        >
          <ul>
            <li
              style={{ color: "white", marginTop: "30px" }}
              onClick={elcHandle}
            >
              Electronics
            </li>
          </ul>
          <ul>
            <li style={{ color: "white" }} onClick={jeweHandle}>
              Jewellery
            </li>
          </ul>
          <ul>
            <li style={{ color: "white" }} onClick={menHandle}>
              MensClothing
            </li>
          </ul>
          <ul>
            <li style={{ color: "white" }} onClick={womenHandle}>
              WomenClothing
            </li>
          </ul>
        </div>

        <div
          style={{ flex: "10", boxShadow: "1px 2px 5px 1px ", padding: "10px" }}
        >
          {user.map((item) => {
            return (
              <ul>
                <li style={{ color: "black" }}>{item.title}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Product;
