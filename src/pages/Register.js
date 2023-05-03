import { useState } from "react"
import { Link } from "react-router-dom"
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })
  const handleChange = e => {
    setInputs(prev =>({...prev,[e.target.name] : e.target.value}))

  }
  return (
    <div className="tommy">
      <h1 className="t-h1">Register</h1>
      <form className="t-form">
        <input required type="text" placeholder="username" name="username" className="t-input" onChange={handleChange}/>
        <input required type="text" placeholder="email" name="email" className="t-input" onChange={handleChange}/>
        <input required type="password" placeholder="password"name="password" className="t-input" onChange={handleChange}/>
        <button className="t-btn">Login</button>
        <p className="t-p">This is an error!</p>
        <span className="t-span">Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register