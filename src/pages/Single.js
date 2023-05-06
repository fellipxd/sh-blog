import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { getText } from "../utils/getText";
import { ToastContainer, toast } from "react-toastify";
import Picture from "../img/marguerite-729510__340.jpg";

const Single = () => {
  const [posts, setPosts] = useState("");
  const [fetching, setFetching] = useState("Fetching Blogs...");
  // const [comment, isComment] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  const user = sessionStorage.getItem("id");

  const user_id = parseInt(user);

  useEffect(() => {
    async function blogs() {
      const res = await fetch(
        `https://blog.shbootcamp.com.ng/fetch_post.php?id=${id}`
      );
      const data = await res.json();
      const blog = data.fetch_post.post;
      setPosts(blog);
      setFetching("");
    }
    blogs();
  }, [setPosts, id]);

  const deletePost = () => {
    console.log("deleted");

    const deleteData = { id, user_id };

    fetch("https://blog.shbootcamp.com.ng/delete_post.php", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success(data.message, {
            hideProgressBar: true,
            autoClose: 2000,
            position: "bottom-right",
            theme: "dark",
            pauseOnHover: true,
          });
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        } else {
          toast.error(data.message, {
            hideProgressBar: true,
            autoClose: 2000,
            position: "bottom-right",
            theme: "dark",
            pauseOnHover: true,
          });
        }
      });
  };

  return (
    <div className="px-6 flex md:flex-row flex-col mt-8">
      <span className="flex text-lg justify-center">{fetching}</span>
      <div className="md:pr-2 single-content flex flex-col gap-[30px]">
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <div className="single-content flex flex-col gap-[30px]">
                <img
                  className="w-full h-80 md:h-[400px] object-cover"
                  src={post.blog_picture ? post.blog_picture : Picture}
                  alt="blog"
                />
                <div className=" flex items-center gap-[10px] text-[14px]">
                  {/* <img
                    className=" w-[100px] h-[100px] rounded-full object-cover"
                    src={post.author_picture}
                    alt="User"
                  /> */}
                  <div className=" flex items-center gap-[10px] text-[14px]">
                    <div>
                      <span className=" md:text-lg font-bold">{post.author_name}</span>
                      <p>{post.date_publish}</p>
                    </div>
                    <span className="flex gap-2 -mt-4">
                      <Link to={`/write?edit=${id}`} state={post}>
                        {
                          <CiEdit className="text-2xl md:text-3xl cursor-pointer hover:text-blue-600" />
                        }
                      </Link>
                      <span onClick={deletePost}>
                        {
                          <RiDeleteBin3Line className="text-2xl md:text-3xl cursor-pointer hover:text-red-500" />
                        }
                      </span>
                    </span>
                  </div>
                </div>
                <ToastContainer />
                <h1 className="text-4xl font-bold md:text-start text-center">{post.blog_title}</h1>
                <div className="text-lg flex flex-col gap-2 my-4 md:text-start text-center">
                  {getText(post.body)}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <label htmlFor="comment" className="mt-2 font-bold">
                  Add comments:
                </label>
                <textarea
                  className="block mt-2 w-80 h-full border border-gray-500 rounded-lg"
                  name=""
                  id="comment"
                ></textarea>
              </div>
            </div>
          ))}
      </div>
      <div className="md:border-l md:pl-2 single-menu">{/* <Menu /> */}</div>
    </div>
  );
};

export default Single;
