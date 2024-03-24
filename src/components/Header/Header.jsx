import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
const Header = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
  return (
    <div className="navbar bg-base-100 flex">
      <div className="navbar-start flex-1">
        {" "}
        {/* 1/3 width */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navbar-end"
          >
            <li>
              <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
                Explore
              </a>
            </li>
            <li>
              <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
                Discover
              </a>
            </li>
            <li>
              <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
                For Professionals
              </a>
            </li>
            <li>
              <div className="relative">
                <BsThreeDots onClick={toggleDropdown} />
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                    <li>
                      <a>Pricing</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                    <li>
                      <a>Help</a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a className="text-gray-500 text-base hover:bg-transparent hover:text-black border-l">
                Login
              </a>
            </li>
            <li>
              <a className="text-white text-base hover:bg-[#E17800] hover:text-white bg-[#E17800] px-5 py-2">
                Join Free
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xllg:flex navbar-end lg:flex-2 lg:w-1/3">
          <img src="../../../public/Group 289.png" alt="Logo"></img>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex navbar-end lg:flex-2 lg:w-2/3">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
              Explore
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
              Discover
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-base hover:bg-transparent hover:text-black">
              For Professionals
            </a>
          </li>
          <li>
            <div className="relative">
              <BsThreeDots onClick={toggleDropdown} />
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Help</a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li>
            <a className="text-gray-500 text-base hover:bg-transparent hover:text-black border">
              Submit Photos
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-base hover:bg-transparent hover:text-black border-l">
              Login
            </a>
          </li>
          <li>
            <a className="text-white text-base hover:bg-[#E17800] hover:text-white bg-[#E17800] px-5 py-2">
              Join Free
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
