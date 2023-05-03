import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Menu } from '../components/Menu';




const Single = () => {
  return (
    <div className='flex gap-[50px] px-6 md:px-24 '>
      <div className='w-full md:flex-[5] '>
        <img src='/images/image.png' alt="blog" className='h-[350px] w-full  ' />
        <div className='my-10 flex items-center gap-[10px] md:text-[14px] '>
          <img src='/images/kendrick.png' alt='user' className=' w-[50px] h-[50px] rounded-full object-cover ' />
          <div>
            <span className=' font-bold ' >King Kunta</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='flex gap-[20px] items-center'>
            <Link to='/write?edit=2'>
              <AiOutlineEdit className="h-[25px] w-[25px] pointer" />
            </Link>

            <AiOutlineDelete className="h-[25px] w-[25px] pointer  " />
          </div>
        </div>
        <h1 className='text-5xl mb-10'>First Post</h1>
        <p className='text-lg leading-[35px] text-justify'>This is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our website.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
