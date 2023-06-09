import { AiOutlineArrowDown } from "react-icons/ai";

const Welcome = ({ id, text, text2, primary }) => {
  return (
    <div>
      <div
        className={
          primary
            ? "w-full h-[90vh] flex flex-col items-center justify-center gap-10 relative bg-gradient-to-br from-purple-600 to-purple-950"
            : "w-full h-[87dvh] flex flex-col items-center justify-center gap-10 relative bg-white"
        }
      >
        <span className="text-5xl sm:text-6xl text-black font-bold text-center">
          {text}
        </span>
        <span className="text-4xl sm:text-5xl text-white font-bold text-center">
          {text2}
        </span>
        {primary ? (
          <span className="text-3xl text-white absolute bottom-5 transition animate-bounce">
              <AiOutlineArrowDown />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Welcome;
