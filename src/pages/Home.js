import { Link } from "react-router-dom"
import { truncateText } from "../utils/truncaateText"
import { Tab } from '@headlessui/react'

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




const Home = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col gap-[50px] md:gap-[100px]  m-auto ">
        <Tab.Group >
          <Tab.List className="flex space-x-6  border-b-2 p-1 pb-4 max-w-[1024px]">
            <Tab>All</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          <Tab.Panels  >
            <Tab.Panel className=" flex flex-col gap-[50px] md:gap-[100px] max-w-[1024px] md:m-auto ">
              {posts.map(post => (
                <div key={post.id} className="post flex flex-col lg:flex-row gap-[60px] ">
                  <div className="img flex-[1] w-[70vw] lg h-[100px] lg:h-[400px] relative ">
                    <div className="z-[-2] rounded absolute top-[20px] left-[-20px] h-full w-full bg-lightGreen "></div>
                    <img src='/images/image.png' alt="" className="rounded z-10 w-[100%] h-full aspect-[20/12]" />
                  </div>
                  <div className="flex-[1]  flex flex-col justify-between">
                    <Link to={`/post/${post.id}`}>
                      <h1 className="text-5xl font-bold">{post.title}</h1>
                    </Link>
                    <p className="text-lg text-justify"> {truncateText(post.desc)} </p>
                    <Link to={`/post/${post.id}`}>
                      <button className="text-teal w-max py-[10px] px-[20px] pointer border-teal border-[1px] hover:border-lightGreen hover:bg-lightGreen hover:text-black transition ease-in-out duration-500">Read more</button>
                    </Link>
                  </div>
                </div>
              ))}
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>

      </div>
      {/* <div className=" hidden md:flex  border-[5px] w-[300px]">

      </div> */}
    </div>
  )
}

export default Home
