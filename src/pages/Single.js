import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
// import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import Picture from "../img/marguerite-729510__340.jpg";

const Single = () => {
  const [posts, setPosts] = useState("");
  // const [fetching, isFetching] = useState("");

  const { id } = useParams();

  console.log(id);

  // const user = sessionStorage.getItem("id");

  // const userId = parseInt(user);

  useEffect(() => {
    async function blogs() {
      const res = await fetch(`https://blog.shbootcamp.com.ng/fetch_post.php?id=${id}`);
      const data = await res.json();
      const blog = data.fetch_post.post;
      console.log(data, blog);
      setPosts(blog);
    }
    blogs();
  }, [setPosts, id]);

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
                    <Link to={`/write?edit=2`} state={post}>
                      {
                        <CiEdit className="text-2xl cursor-pointer hover:text-blue-600" />
                      }
                    </Link>
                    {
                      <RiDeleteBin3Line className=" text-2xl cursor-pointer hover:text-red-500" />
                    }
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold">{post.blog_title}</h1>
              <div className="text-lg text-justify flex flex-col gap-2 ">
                {post.body}
              </div>
            </div>
          ))}
      </div>
      <div className="single-menu">{/* <Menu /> */}</div>
    </div>
  );
};

export default Single;
