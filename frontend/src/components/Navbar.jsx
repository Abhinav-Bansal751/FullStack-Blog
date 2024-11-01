import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const user = "";

  return (
    <div className="flex  flex-col md:flex-row  justify-between items-center ">
      <h1 className="font-bold text-lg md:text-xl mb-4 md:mb-0">
        <Link to="/">Blog Market</Link>
      </h1>

      <div className="flex justify-center items-center">
        {/* <p><CiSearch /></p> */}
        <input
          type="text"
          placeholder="Search...."
          className="outline-none bg-slate-200 p-2 rounded-lg"
        ></input>
      </div>

      {user ? (
        <h3 className="hover:underline hover:text-blue-500">
          <Link to="/profile">Profile</Link>
        </h3>
      ) : (
        <div className="flex space-x-2 md:space-x-4 items-center justify-center">
          <h3 className="hover:underline hover:text-blue-500">
            <Link to="/login">Login</Link>
          </h3>
          <h3 className="hover:underline hover:text-blue-500">
            <Link to="/register">Register</Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Navbar;
