import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {



  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    setIsButtonDisabled(!event.target.value || !genderValue || !emailValue || !passwordValue);
  };

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
    setIsButtonDisabled(!nameValue || !event.target.value || !emailValue || !passwordValue);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    setIsButtonDisabled(!nameValue || !genderValue || !event.target.value || !passwordValue);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setIsButtonDisabled(!nameValue || !genderValue || !emailValue || !event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Make your API call or other async operation here
    // Once it's complete, clear the form and reset the loading state
    setTimeout(() => {
      setNameValue('');
      setGenderValue('');
      setEmailValue('');
      setPasswordValue('');
      setIsLoading(false);
      setIsButtonDisabled(true)
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-lightGreen ">
      <h1 className="text-2xl font-semibold text-teal mb-6"> Signup</h1>
      <form className="bg-white flex items-center flex-col p-[50px]  border md:w-[500px] gap-6 ">
        <input type="text" placeholder="Name" value={nameValue} onChange={handleNameChange} className="p-3 border-b-[1px] border-gray-400 w-10/12" />
        <select value={genderValue} onChange={handleGenderChange} className="p-3 border-b-[1px] border-gray-400 w-10/12">
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="email" placeholder="Email" value={emailValue} onChange={handleEmailChange} className="p-3 border-b-[1px] border-gray-400 w-10/12" />
        <input type="password" placeholder="Password" value={passwordValue} onChange={handlePasswordChange} className="p-3 border-b-[1px] border-gray-400 w-10/12" />     <button
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

export default Register
