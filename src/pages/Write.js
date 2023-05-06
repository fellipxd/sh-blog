import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const Write = () => {
  const user = sessionStorage.getItem("id");
  // const state = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("session", user);
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  const state = useLocation().state

  const user_id = sessionStorage.getItem("id");
  const [value, setValue] = useState(state?.body ||"");
  const [title, setTitle] = useState(state?.blog_title || "");
  const [file, setFile] = useState(null);
  const [tag, setTag] = useState(state?.tags || "");

  console.log("Clicked");

  const handleUpdate = async (e) => {
    e.preventDefault()

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
        console.log(data);
      });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post(
          "https://blog.shbootcamp.com.ng/write_post.php",
          formData
        );
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    upload();

    const picture = await file.name;

    const data = { user_id, title, picture, tag, value };

    console.log("Clicked", data);

    fetch("https://blog.shbootcamp.com.ng/write_post.php", {
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
        console.log(data);
      });
  };

  return (
    <div className="px-6">
      <div className="add">
        <div className="content">
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
              onChange={(e) => setFile(e.target.files[0])}
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
