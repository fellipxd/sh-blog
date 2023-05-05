import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { truncateText } from "../utils/truncateText";
import {AiOutlineArrowDown} from "react-icons/ai"

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [fetching, isFetching] = useState("");

  const user = sessionStorage.getItem("id");

  const userId = parseInt(user);

  useEffect(() => {
    async function blogs() {
      const res = await fetch(
        "https://blog.shbootcamp.com.ng/all_post.php"
      );
      const data = await res.json();
      const blog = data.message.all_post;
      console.log(blog);
      setPosts(blog);
    }
    blogs();
  }, [setPosts, userId]);

  return (
    <>
      <div className="w-full h-[90dvh] flex flex-col items-center justify-center gap-10 p-32 relative bg-gradient-to-br from-purple-600 to-purple-950">
        <h1 className="text-3xl text-white">Welcome to</h1>
        <span className="text-8xl text-white font-bold">CHAPTERS</span>
        <span className="text-3xl text-white absolute bottom-5 transition animate-bounce">
          <AiOutlineArrowDown />
        </span>
      </div>
      <div className="px-6">
        <Tab.Group>
          {/* <Tab.List>
          <Tab>All</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List> */}
          <Tab.Panels>
            <Tab.Panel>
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
                        <Link to={`/blog${post.post_id}`}>
                          <h1 className="flex text-5xl">{post.blog_title}</h1>
                        </Link>
                        <p className="text-lg">{truncateText(post.body)}</p>
                        <Button
                          link={`/blog/${post.post_id}`}
                          primary={true}
                          text="Read More"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Landing;
