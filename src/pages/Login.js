import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
    setIsButtonDisabled(!event.target.value || !input2Value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
    setIsButtonDisabled(!input1Value || !event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Make your API call or other async operation here
    // Once it's complete, clear the form and reset the loading state
    setTimeout(() => {
      setInput1Value('');
      setInput2Value('');
      setIsLoading(false);
      setIsButtonDisabled(true)
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-lightGreen ">
      <h1 className="text-2xl font-semibold text-teal mb-6"> Login</h1>
      <form className="bg-white flex items-center flex-col p-[50px]  border md:w-[500px] gap-6 ">
        <input type="email" placeholder="email" value={input1Value} onChange={handleInput1Change} className="p-3 border-b-[1px] border-gray-400 w-10/12" />
        <input type="password" placeholder="password" value={input2Value} onChange={handleInput2Change} className="p-3 border-b-[1px] border-gray-400 w-10/12" />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isButtonDisabled}

          className={`p-[10px] border-none bg-gray-400 rounded-md md:w-8/12 m-auto text-lightGreen  ${isButtonDisabled ? 'opacity-30 cursor-not-allowed' : ''
            }`}
        >
          {isLoading ? 'Loading...' : 'Login'}

        </button>
        <p className="error">Error Message</p>
        <span>Don't have an account? <Link to='/register' className="hover:text-slate-500">Register</Link> </span>
      </form>
    </div >
  )
}

export default Login
