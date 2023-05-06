import { BsJournalBookmarkFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="relative text-purple-700 flex flex-col justify-center items-center my-2">
      <BsJournalBookmarkFill className="text-2xl sm:text-4xl" />
      <span className="text-sm sm:text-lg font-bold">CHAPTERS</span>
    </div>
  );
};

export default Logo;
