import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

const Login = () => {
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
        const userId = data.user_id

        sessionStorage.setItem("id", userId)

        console.log(data, inputs);
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
        <p className="t-p">This is an error!</p>
        <span className="t-span">
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
