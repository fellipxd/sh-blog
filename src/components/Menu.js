import React from 'react'
import { Link } from 'react-router-dom'
const posts = [
  {
    "id": 1,
    "title": "First Post",
    "desc": "This is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our websiteThis is the first post on our website.",
    "image": "https://picsum.photos/id/237/200/300"
  },
  {
    "id": 2,
    "title": "Second Post",
    "desc": "This is the second post on our website.",
    "image": "https://picsum.photos/id/238/200/300"
  },
  {
    "id": 3,
    "title": "Third Post",
    "desc": "This is the third post on our website.",
    "image": "https://picsum.photos/id/239/200/300"
  }
]
export const Menu = () => {
  return (
    <div className=' hidden md:flex md:flex-[2] flex-col gap-[30px] '>
      <h1 className='text-[30px] text-[#555] ' >Other posts you may like</h1>
      {posts.map((post) => (
        <div key={post.id} className='flex flex-col gap-[10px] '>
          <img src='/images/image.png' alt='post' />
          <h2 className='text-[25px] text-bold text-[#555] '>{post.title}</h2>
          <Link to={`/post/${post.id}`}>
            <button className="text-teal w-max py-[10px] px-[20px] pointer border-teal border-[1px] hover:border-lightGreen hover:bg-lightGreen hover:text-black transition ease-in-out duration-500">Read more</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
