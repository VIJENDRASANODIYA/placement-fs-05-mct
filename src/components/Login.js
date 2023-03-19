import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length < 6) {
      alert(
        "please login first!! Hint--Enter Your Email & Password !<6 Char Pass.."
      );
    } else if (email === "") {
      alert("please enter your email");
    } else {
      navigate("/Home");
    }
  };
  return (
    <div>
      <h1 className="center">Wellcome To Geekster Acadmy</h1>
      <div
        style={{ margin: " 50px auto", border: "2px solid" }}
        className="row"
      >
        <div
          className="col-6"
          style={{ flex: "0 0 auto", width: "50%", padding: "20px 30px" }}
        >
          <h1>
            Wellcome back to <br /> pretty Login
          </h1>
          <p>it's great to have you back!</p>
          <label>EMAIL</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>PASSWORD</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="check-box-div  d-flex">
            <input
              style={{ backgroundColor: "#d430b4" }}
              type="checkbox"
              value="checked"
            />{" "}
            Remember me?
            <p>Forgot password?</p>
          </div>
          <div className="div-btn">
            <button className="bbt" onClick={handleLogin}>
              Loggin
            </button>

            <button className="bbc">CREATE ACCOUNT</button>
          </div>
        </div>
        <div className="col-6" style={{ padding: "20px 30px" }}>
          <div style={{ height: "317px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s"
              width="304px"
            />
          </div>
        </div>
        <div style={{ margin: "5px 60px" }}>
          <p>Or loggin With</p>
          <p style={{ color: "#d430b4" }}>Facebook Google</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
