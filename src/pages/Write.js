import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Write = () => {
  const user = sessionStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const state = useLocation().state;

  const post_id = state?.post[0].post_id;

  const user_id = sessionStorage.getItem("id");
  const [value, setValue] = useState(state?.post[0].body || "");
  const [blogData, setBlogData] = useState({
    title: state?.post[0].blog_title || "",
    tag: state?.post[0].tags || "",
    picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      picture: file,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const title = blogData.title
    const tag = blogData.tag

    const editData = {user_id, post_id, title, value, tag}

    console.log(editData)

    try {
      const res = await fetch(
        `https://blog.shbootcamp.com.ng/edit_post.php`,
        {
          method: "POST",
          body: editData,
        }
      );

      const { status, message } = await res.json();

      if (status === "success") {
        console.log(message);

        toast.success(message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
        setBlogData({
          title: "",
          value: "",
          tag: "",
        });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else {
        toast.error(message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", blogData.title);
    formData.append("value", value);
    formData.append("tag", blogData.tag);
    formData.append("picture", blogData.picture);

    console.log(formData)

    try {
      const res = await fetch(
        `https://blog.shbootcamp.com.ng/write_post.php?user_id=${user_id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const { status, message } = await res.json();

      if (status === "success") {
        console.log(message);

        toast.success(message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
        setBlogData({
          title: "",
          value: "",
          tag: "",
        });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else {
        toast.error(message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="px-6">
      <ToastContainer />
      <div className="add mt-5 flex md:flex-row flex-col gap-5">
        <div className="content flex gap-5 flex-col">
          <input
            className="p-[10px] border border-solid"
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <div className="h-[300px] overflow-scroll">
            <ReactQuill
              className="h-full border-b border-b-solid"
              theme="snow"
              name="value"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item p-[10px] flex flex-row md:flex-col items-center md:items-start text-[12px] justify-between ">
            <div>
              <h1>Publish</h1>
            </div>
            <div>
              <input
                style={{ display: "none" }}
                type="file"
                name="picture"
                onChange={handleFileInputChange}
                id="file"
              />
              <label htmlFor="file">Upload Image</label>
            </div>
            <div className="flex justify-between mt-2">
              {!state ? (
                <Button text="Save blog" onClick={handleSubmit} />
              ) : (
                <Button
                  primary={true}
                  text="Update Blog"
                  onClick={handleUpdate}
                />
              )}
            </div>
          </div>
          <div className="item p-[10px] flex flex-col text-[12px] justify-between ">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "art"}
                value="art"
                onChange={handleInputChange}
                id="art"
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "science"}
                value="science"
                onChange={handleInputChange}
                id="science"
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "technology"}
                value="technology"
                onChange={handleInputChange}
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "cinema"}
                value="cinema"
                onChange={handleInputChange}
                id="cinema"
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "design"}
                value="design"
                onChange={handleInputChange}
                id="design"
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="tag"
                checked={blogData.tag === "food"}
                value="food"
                onChange={handleInputChange}
                id="food"
              />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
