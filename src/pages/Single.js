import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className=" flex gap-[50px]">
      <div className="single-content flex flex-col gap-[30px]">
        <img
          className=" w-full h-[300px] object-cover"
          src=""
          alt="blog"
        />
        <div className=" flex items-center gap-[10px] text-[14px]">
          <img
            className=" w-[100px] h-[100px] rounded-full object-cover"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="User"
          />
          <div>
            <span className=" font-bold">John</span>
            <p>Posted 2 days ago</p>
          </div>
          <span className="flex gap-2 -mt-4">
            <Link to={`/write?edit=2`}>
              {
                <CiEdit className="text-2xl cursor-pointer hover:text-blue-600" />
              }
            </Link>
            {
              <RiDeleteBin3Line className=" text-2xl cursor-pointer hover:text-red-500" />
            }
          </span>
        </div>
        <h1 className="text-4xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          unde.
        </h1>
        <div className="text-lg text-justify flex flex-col gap-2 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate tempore vel obcaecati natus! Temporibus modi iusto
            officia itaque? Possimus ut, deserunt ipsum esse dolorem praesentium
            veniam expedita? Aut, blanditiis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate tempore vel obcaecati natus! Temporibus modi iusto
            officia itaque? Possimus ut, deserunt ipsum esse dolorem praesentium
            veniam expedita? Aut, blanditiis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate tempore vel obcaecati natus! Temporibus modi iusto
            officia itaque? Possimus ut, deserunt ipsum esse dolorem praesentium
            veniam expedita? Aut, blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            est adipisci quidem ut ad consectetur blanditiis, laboriosam
            molestiae in! Maxime esse blanditiis incidunt, culpa ab adipisci
            cupiditate, vitae asperiores soluta nisi nemo sequi eveniet
            voluptatum, quas architecto quis rerum harum a iusto quasi facilis
            nam ipsum aperiam! Quasi, optio consectetur?
          </p>
        </div>
      </div>
      <div className="single-menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
