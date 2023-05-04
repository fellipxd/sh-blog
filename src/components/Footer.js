import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="mt-[100px] p-[20px] bg-green-100 flex justify-between items-center">
      <img className="h-[50px]" src={Logo} alt="" />
      <span>
        Made with <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
