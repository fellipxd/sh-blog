import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Write = () => {
  const user = sessionStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  const state = useLocation().state;

  const user_id = sessionStorage.getItem("id");
  const [value, setValue] = useState(state?.body || "");
  const [title, setTitle] = useState(state?.blog_title || "");
  const [picture, setPicture] = useState(null);
  const [tag, setTag] = useState(state?.tags || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = { user_id, title, tag, value };

    fetch("https://blog.shbootcamp.com.ng/edit_post.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark",
          });
        } else {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        toast.warning(err.message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { user_id, title, picture, tag, value };

    fetch("https://blog.shbootcamp.com.ng/write_post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark",
          });
        } else {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        toast.warning(err.message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: true,
          theme: "dark",
        });
      });
  };

  return (
    <div className="px-6">
      <div className="add mt-5 flex md:flex-row flex-col gap-5">
        <div className="content flex gap-5 flex-col">
          <input
            className="p-[10px] border border-solid"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <div className="h-[300px] overflow-scroll">
            <ReactQuill
              className="h-full border-b border-b-solid"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status:</b> Draft
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              name=""
              onChange={(e) => setPicture(e.target.files[0])}
              id="file"
            />
            <label htmlFor="file">Upload Image</label>
            <div className="flex justify-between mt-2">
              <Button primary={true} text="Update" onClick={handleUpdate} />
              <Button text="Save blog" onClick={handleSubmit} />
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "art"}
                onChange={() => setTag("art")}
                value="art"
                id="art"
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "science"}
                onChange={() => setTag("science")}
                value="art"
                id="science"
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "technology"}
                onChange={() => setTag("technology")}
                value="art"
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "cinema"}
                onChange={() => setTag("cinema")}
                value="art"
                id="cinema"
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "design"}
                onChange={() => setTag("design")}
                value="art"
                id="design"
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                checked={tag === "food"}
                onChange={() => setTag("food")}
                value="art"
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
