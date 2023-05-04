import Button from "../components/Button";
import Logo from "../img/logo.png";

const Landing = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center gap-10 p-32">
      <h1 className="text-5xl">Welcome to</h1>
      <img className="w-1/2" src={Logo} alt="logo" />
      <div className="flex gap-10">
        <Button link="register" text="Register" />
        <Button link="login" primary={true} text="Login" />
      </div>
    </div>
  );
};

export default Landing;
