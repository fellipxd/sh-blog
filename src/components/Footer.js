import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-[100px] py-4 px-2 bg-purple-100 flex justify-between items-center">
      <Logo />
      <span>
        Made with <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
