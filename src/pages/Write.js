import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div>
      <div className="add">
        <div className="content">
          <input className="p-[10px] border border-solid" type="text" placeholder="Title" />
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
            <input style={{ display: "none" }} type="file" name="" id="file" />
            <label htmlFor="file">Upload Image</label>
            <div className="flex justify-between mt-2">
              <Button primary={true} text="Save as a draft" />
              <Button text="update" />
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="technology" />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="cinema" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
