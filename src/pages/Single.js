import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { getText } from "../utils/getText";
import Picture from "../img/marguerite-729510__340.jpg";

const Single = () => {
  const [posts, setPosts] = useState("");
  // const [fetching, isFetching] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

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
      console.log(data, blog);
      setPosts(blog);
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
          setSuccessMessage(data.message);
          setTimeout(() => {
            setSuccessMessage("");
            navigate("/home");
          }, 3000);
        } else {
          setErrMessage(data.message);
          setTimeout(() => {
            setErrMessage("");
          }, 3000);
        }
      });
  };

  return (
    <div className="px-6 flex gap-[50px]">
      <div className="single-content flex flex-col gap-[30px]">
        {posts &&
          posts.map((post) => (
            <div className="single-content flex flex-col gap-[30px]">
              <img
                className="w-full h-[400px] object-cover"
                src={post.blog_picture ? post.blog_picture : Picture}
                alt="blog"
              />
              <div className=" flex items-center gap-[10px] text-[14px]">
                <img
                  className=" w-[100px] h-[100px] rounded-full object-cover"
                  src={post.author_picture}
                  alt="User"
                />
                <div className=" flex items-center gap-[10px] text-[14px]">
                  <div>
                    <span className=" font-bold">{post.author_name}</span>
                    <p>{post.date_publish}</p>
                  </div>
                  <span className="flex gap-2 -mt-4">
                    <Link to={`/write?edit=${id}`} state={post}>
                      {
                        <CiEdit className="text-2xl cursor-pointer hover:text-blue-600" />
                      }
                    </Link>
                    <span onClick={deletePost}>
                      {
                        <RiDeleteBin3Line className=" text-2xl cursor-pointer hover:text-red-500" />
                      }
                    </span>
                  </span>
                </div>
              </div>
              <span className="text-green-400">{successMessage}</span>
              <span className="text-red-500">{errMessage}</span>
              <h1 className="text-4xl font-bold">{post.blog_title}</h1>
              <div className="text-lg text-justify flex flex-col gap-2 ">
                {getText(post.body)}
              </div>
            </div>
          ))}
      </div>
      <div className="single-menu">{/* <Menu /> */}</div>
    </div>
  );
};

export default Single;
