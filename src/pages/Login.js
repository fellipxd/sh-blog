import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

        if (data.status === "success") {
          toast.success(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark"
          })
          setTimeout(() => {
            sessionStorage.setItem("id", userId);
            sessionStorage.setItem("username", username);
            navigate("/home");
          }, 3000);
        } else if (data.status === "error") {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark"
          })
        }
      });
  };

  return (
    <div className="tommy bg-gradient-to-br from-purple-600 to-purple-950 px-4">
      <h1 className="text-white uppercase font-bold text-2xl mb-4">Login</h1>
      <form className="flex flex-col gap-4 p-5 bg-white rounded-lg w-80">
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
        <ToastContainer />
        <span className="t-span">
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
