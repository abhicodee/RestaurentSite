import React from 'react'
import "./Mainpage.css";
import video1 from "./video/video1.mp4"
import food1 from "./image/food1.webp"
import Review from './Review';
const Mainpage=()=>{
   return (
    <>
   <div className='box'>
   <div className='image'>
   <img src={food1}></img>
   <p className='description'>The best  place for food in Delhi</p>
   <span className="search-box">
   <input  className='search-input'type="text" placeholder='Enter a food items'></input>
   <button className='btn'>Search</button>

   </span>  
   </div>    
   </div>
   <Review/>
   <div className='video-container'>
  <iframe
      width="500"
      height="180"
      src={video1}
      title="restaurentvideo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      frameborder="0"
      allowfullscreen
    /> 
    </div>
   
  
    </>
   )
}
export default Mainpage;
