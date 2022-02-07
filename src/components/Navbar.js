import React from "react";
import "../styles/Navbar.css";
import AwotexNav from "../assets/images/awotexNav.png";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav>
      <div className="logoNav">
        <img href="/" src={AwotexNav} className="logoImg" alt="awotex logo" />
      </div>
      <div className="navItems margin-left">
        <a href="/">Home</a>
      </div>
      <div className="navItems">
        <a href="/">Games</a>
      </div>
      <div className="navItems">
        <a href="/">Social</a>
      </div>
      <div className="navItems">
        <a href="/">About</a>
      </div>
      <div className="navItems">
        <a href="/">Discord</a>
      </div>
      <div className="navSearch">
        <input type="text" placeholder="Search" />
        <button>
          <AiOutlineSearch color="white"/>
        </button>
      </div>
    </nav>
  );
}
