import { Link } from "react-router-dom"
import { useState } from "react"
const Login = () => {
    const [inputs, setInputs] = useState({
      username: "",
      password: "",
    })
    const handleChange = e => {
      setInputs(prev =>({...prev,[e.target.name] : e.target.value}))
  
    }
  
  return (
    <div className="tommy">
      <h1 className="t-h1">Login</h1>
      <form className="t-form">
        <input type="text" placeholder="Username" name="username" className="t-input"onChange={handleChange}/>
        <input type="password" placeholder="password"name="password" className="t-input" onChange={handleChange}/>
        <button className="t-btn">Login</button>
        <p className="t-p">This is an error!</p>
        <span className="t-span">Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login