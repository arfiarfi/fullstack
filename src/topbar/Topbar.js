import React from "react";

// icon
import {
  BsFacebook,
  BsPinterest,
  BsTwitter,
  BsInstagram,
  BsSearch,
} from "react-icons/bs";

export default function Topbar() {
  return (
    <div className="flex justify-between bg-slate-600 text-white ">
      <div className="flex gap-3 pt-4 pl-10 py-8">
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <BsTwitter />
        </a>
        <a href="">
          <BsPinterest />
        </a>
        <a href="">
          <BsInstagram />
        </a>
      </div>
      <div className="flex gap-5 font-extralight pt-4">
        <p className="text-sm">Home</p>
        <p className="text-base">Contact</p>
        <p className="text-lg">About</p>
        <p className="text-base">Write</p>
        <p className="text-sm">Logout</p>
      </div>
      <div className="flex gap-3 pt-4 pr-10">
        <BsSearch />
        <label>
          <input />
        </label>
      </div>
    </div>
  );
}
