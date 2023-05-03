import React, { Fragment } from 'react';
import { AiOutlineSearch, AiOutlineBell, AiOutlineEdit } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

const Navbar = () => {
  return (
    <nav className="py-3 px-6 flex justify-between items-center border h-[80px]">
      {/* Logo */}
      <div div className="flex items-center gap-5 justify-between " >
        <a href="/home" className=" border text-lg font-bold text-white h-[70px] w-[70px]">
          <img src="/images/4.png" alt="logo" />
        </a>
        {/* Search Bar */}
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="border absolute right-0 top-0 mt-3 mr-4">
            <AiOutlineSearch className="text-gray-600 h-4 w-4" />
          </button>
        </div>
      </div >



      {/* Icons */}
      <div div className="flex items-center gap-[20px] border-2" >
        <button className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <AiOutlineBell className="h-6 w-6" />
        </button>
        <button className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Create a new post</span>
          <AiOutlineEdit className="h-6 w-6" />
        </button>
        {/* User Profile */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Options

            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {links.map((link) => (
                <div className="px-1 py-1 ">
                  <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                  >
                    {link.label}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div >
    </nav >
  );
};


export default Navbar





