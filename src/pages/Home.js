import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const user = sessionStorage.getItem("id");

  const userId = parseInt(user);

  useEffect(() => {
    async function blogs() {
      const res = await fetch(
        `https://blog.shbootcamp.com.ng/all_post.php?sessionId=${userId}`
      );
      const data = await res.json();
      const blog = data.message.all_post;
      console.log(blog);
      setPosts(blog);
    }
    blogs();
  }, [setPosts, userId]);

  return (
    <div className="">
      <div className="mt-[50px] flex flex-col gap-[150px]">
        {posts &&
          posts.map((post) => (
            <div
              className="odd:flex-row-reverse flex gap-[100px]"
              key={post.post_id}
            >
              {/* <div className="post-img relative after:content-[''] after:w-full after:h-full after:bg-gray-100 after:absolute after:top-5 after:-left-5 after:-z-[1]">
              <img
                className="w-full max-h-[400px] object-cover"
                src={post.img}
                alt=""
              />
            </div> */}
              <div className="post-content flex flex-col justify-between">
                <Link to={`/post${post.post_id}`}>
                  <h1 className="flex text-5xl">{post.blog_title}</h1>
                </Link>
                <p className="text-lg">{post.body}</p>
                <Button link="blog" primary={true} text="Read More" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
