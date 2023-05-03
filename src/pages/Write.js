import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from 'react-router';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || []);


  const tagList = [
    { value: 'art', label: 'Art' },
    { value: 'science', label: 'Science' },
    { value: 'technology', label: 'Technology' },
    { value: 'cinema', label: 'Cinema' },
    { value: 'design', label: 'Design' },
    { value: 'food', label: 'Food' },
  ];



  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      // const res = await axios.post('/upload', formData);
      // return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleCatChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    // If the checkbox was checked, add the value to the selected categories array
    // Otherwise, remove the value from the array
    const updatedCat = isChecked
      ? [...cat, value]
      : cat.filter((c) => c !== value);

    // Limit the length of the updatedCat array to only 5
    const limitedCat = updatedCat.slice(0, 5);

    setCat(limitedCat);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    // try {
    //   state
    //     ? await axios.put(`/posts/${state.id}`, {
    //       title,
    //       desc: value,
    //       cat,
    //       img: file ? imgUrl : '',
    //     })
    //     : await axios.post(`/posts/`, {
    //       title,
    //       desc: value,
    //       cat,
    //       img: file ? imgUrl : '',
    //       date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    //     });
    //   navigate('/');
    // } catch (err) {
    //   console.log(err);
    // }
  };

  console.log(cat)





  return (
    <div className='mt-[20px] flex flex-col md:flex-row gap-[20px] px-6 md:px-24'>
      <div className='flex-[5] flex flex-col gap-[20px]'>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className='border border-[#ccc] mb-[20px] p-[10px]'
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='flex-[2] flex flex-col gap-[20px]'>

        <div className='item'>
          {/* <h1 className='text-4xl mb-10'>Publish</h1> */}
          {/* <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span> */}


          <h1 className='text-4xl mb-10'>Tags</h1>
          <div className='flex flex-wrap gap-[5px]'>
            {tagList.map((tag) => (
              <div
                key={tag.value}
                className={`cat ${cat.includes(tag.value) ? 'bg-gray-300' : 'bg-white'}`}
              >
                <input
                  type='checkbox'
                  checked={cat.includes(tag.value)}
                  name='cat'
                  value={tag.value}
                  id={tag.value}
                  onChange={handleCatChange}
                />
                <label htmlFor={tag.value}>{tag.label}</label>
              </div>
            ))}
            {cat.length === 5 && <p>Max tag limit reached</p>}
          </div>
          <div className='buttons'>
            {/* <button className="text-teal w-max py-[10px] px-[20px] pointer border-teal border-[1px] hover:border-lightGreen hover:bg-lightGreen hover:text-black transition ease-in-out duration-500">Save as a draft</button> */}
            <input
              style={{ display: 'none' }}
              type='file'
              id='file'
              name=''
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className='file text-teal w-max py-[10px] px-[20px] pointer border-teal border-[1px] hover:border-lightGreen hover:bg-lightGreen hover:text-black transition ease-in-out duration-500' htmlFor='file'>
              Upload Image
            </label>

            <button onClick={handleClick} className="text-teal w-max py-[10px] px-[20px] pointer border-teal border-[1px] hover:border-lightGreen hover:bg-lightGreen hover:text-black transition ease-in-out duration-500">Publish</button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Write
