import React from "react";


const Footer = () => {
  return (
    <footer className="mt-auto w-full  bg-lightGreen flex items-center justify-between h-[80px] ">
      <a href="/" className=" border text-lg font-bold text-white h-[70px] w-[70px]">
        <img src="/images/4.png" alt="logo" />
      </a>
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
