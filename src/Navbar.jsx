import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="./lpn.jpg" alt="Logo" className="w-16" />
      </div>
      <ul className="flex flex-wrap md:flex-row justify-center md:justify-start items-center space-x-4">
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">General</li>
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">Sports</li>
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">Health</li>
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">Science</li>
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">Technology</li>
        <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-300 transition-colors">Entertainment</li>
      </ul>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="absolute right-3 top-2 text-gray-600">
            <FaSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
