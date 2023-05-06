import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://blog.shbootcamp.com.ng/signup.php", {
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
        if (data.status === "error") {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark"
          })
        } else {
          toast.success(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark"
          })
          setTimeout(() => {
            navigate("/login");
            setInputs({
              username: "",
              email: "",
              gender: "",
              password: "",
            });
          }, 3000);
        }
      });
  };

  return (
    <div className="tommy bg-gradient-to-br from-purple-600 to-purple-950 px-4">
      <h1 className="text-white uppercase font-bold text-2xl mb-4">Register</h1>
      <form className="flex flex-col gap-4 p-5 bg-white rounded-lg w-80">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          className="t-input"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          className="t-input"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange} className="t-input">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          className="t-input"
          onChange={handleChange}
        />
        <div className="text-center">
          <Button text="SIGNUP" onClick={handleSubmit} />
        </div>
        <ToastContainer />
        <span className="t-span">
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
