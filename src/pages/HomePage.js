import React from 'react';
import "../styles/HomePage.css"
import Navbar from '../components/Navbar';

export default function HomePage() {
  return( 
  <div className='HomePageContainer'>
      <Navbar/>
      <h1> home page </h1>  
  </div>
  )
}
