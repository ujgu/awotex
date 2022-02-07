import React from 'react';
import "../styles/Banner.css";
import DiscordInvite from "react-discord-invite";
import awotexBanner from "../assets/images/awotex.png";

export default function Banner() {
  return (
  <div className='banner'>
    <div className='banner-logo'>
      <img src={awotexBanner} alt='logo'/>
    </div>  
    <div className='banner-left'>
      <h1>Join</h1>
      <h1>The</h1>
      <h1>Community</h1>
    </div>
    <div className='banner-right'>
      
      <DiscordInvite palette="dark" guild="708050277957238784"/>
    </div>
  </div>
  );
}