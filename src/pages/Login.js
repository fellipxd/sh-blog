import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Clicked");

    fetch("https://blog.shbootcamp.com.ng/signin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const userId = data.user_id;
        const username = data.username;

        console.log(data, inputs);

        if (data.status === "success") {
          setTimeout(() => {
            setSuccessMessage(data.message);
            sessionStorage.setItem("id", userId);
            sessionStorage.setItem("username", username);
            navigate("/home");
          }, 3000);
        } else if (data.status === "error") {
          setErrMessage(data.message);
          setTimeout(() => {
            setErrMessage("");
          }, 3000);
        }
      });
  };

  return (
    <div className="tommy bg-gradient-to-br from-purple-600 to-purple-950">
      <h1 className="t-h1 text-white">Login</h1>
      <form className="t-form">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="t-input"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="t-input"
          onChange={handleChange}
        />
        <div className="text-center">
          <Button onClick={handleSubmit} text="LOGIN" />
        </div>
        <p className="text-sm text-center text-red-600">{errMessage}</p>
        <p className="text-sm text-center text-green-600">{successMessage}</p>
        <span className="t-span">
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
