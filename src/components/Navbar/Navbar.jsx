import React from "react";
import {
  FaClock,
  FaCog,
  FaEnvelope,
  FaHome,
  FaSignInAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 h-full bg-darkBg w-24 p-5">
      <ul className="flex flex-col justify-center items-center text-lg gap-5">
        <li className="my-2 cursor-pointer p-3 rounded-full">
          <Link style={{color:'white'}} to="/">
            Todo
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition">
          <Link to="/">
            <FaHome fill="#fff" stroke="#fff" />
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition">
          <Link to="/">
            <FaUserAlt fill="#fff" stroke="#fff" />
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition">
          <Link to="/">
            <FaEnvelope fill="#fff" stroke="#fff" />
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition">
          <Link to="/">
            <FaClock fill="#fff" stroke="#fff" />
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition">
          <Link to="/">
            <FaCog fill="#fff" stroke="#fff" />
          </Link>
        </li>
        <li className="my-2 cursor-pointer hover:bg-primary p-3 rounded-full transition absolute bottom-5">
          <Link to="/">
            <FaSignInAlt fill="#fff" stroke="#fff" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
