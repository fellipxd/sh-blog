import { BsJournalBookmarkFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="relative text-purple-700 flex flex-col justify-center items-center my-2">
      <BsJournalBookmarkFill className="text-4xl" />
      <span className="text-lg font-bold">CHAPTERS</span>
    </div>
  );
};

export default Logo;
