import React from 'react'
import "./Mainpage.css";
import video1 from "./video/video1.mp4"
import food1 from "./image/food1.webp"
import Review from './Review';
import Footer1 from '../Footer/Footer1';
const Mainpage=()=>{
   return (
    <>
   <div className='box'>
   <div className='image'>
   <img  className="imgw" src={food1}></img>
   <p className='description'>The best  place for food in Delhi
   </p>
   <span className="search-box">
   <input  className='search-input'type="text" placeholder='Enter a food items'></input>
   <button className='btn'>Search</button>

   </span>  
   </div>    
   </div>
   <Review/>
 <div class="right">
    <div className='video-container'>
  <iframe
      src={video1}
      title="restaurentvideo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      frameborder="0"
      allowfullscreen
    /> 
    </div>
  
    
    </div>
   <div className='dep'>
<h2 className='dephe'>Description:</h2>
<p className='padw'>Welcome to Culinary Fusion Haven, where culinary artistry meets cultural diversity in a harmonious symphony of flavors. Nestled in the heart of the city, our restaurant promises a dining experience that transcends traditional boundaries,
 combining exquisite dishes from around the world to create a truly unique gastronomic journey.</p>
  <h2 className='dephe'>Unique Features:</h2>
  <p  className='padw'>Global Fusion Cuisine: Our restaurant takes a bold approach by fusing flavors and techniques from various cuisines. From Asian-inspired tacos to Mediterranean-infused curries, our menu celebrates the beauty of cross-cultural culinary creations.

Interactive Dining: At Culinary Fusion Haven, dining is an interactive experience. Our open kitchen design allows guests to witness the magic as skilled chefs blend, sizzle, and plate dishes with precision and flair. You're not just enjoying a meal; you're part of the culinary spectacle.

Seasonal Menus: We believe in the power of seasonal and locally sourced ingredients. Our ever-changing menu reflects the best of each season, ensuring that every dish is bursting with freshness and vitality.

Customizable Flights: For the adventurous foodies, we offer "flights" – a selection of smaller portions of dishes carefully curated around a theme. This allows you to explore multiple flavors in a single dining experience.</p>
<h2 className='dephe'>Specialties:</h2>
<p  className='padw'>Fusion Tapas Platter: A signature dish that encapsulates our culinary philosophy. Enjoy an array of mini dishes, each combining ingredients and techniques from different parts of the world.

Sushi Burritos with a Twist: A playful take on Japanese and Mexican cuisines. Savor the marriage of fresh sushi ingredients wrapped in a large, nori-lined tortilla.

Mango Tango Spring Rolls: A delightful fusion of Thai and Caribbean influences, these spring rolls combine the tropical sweetness of ripe mangoes with a hint of spicy jerk seasoning.

Galactic Desserts: Our dessert menu reaches for the stars with cosmic creations. Try the "Starry Night Parfait" featuring layers of edible glitter, or the "Black Hole Chocolate Cake" with a surprise fruity twist.</p>
<h2 className='dephe'>Values:</h2>
<p  className='padw'>Diversity and Inclusion: We celebrate the diversity of cultures and cuisines, both in our menu and our team. Our staff hails from different culinary backgrounds, contributing to our vibrant and inclusive atmosphere.

Sustainability: We are committed to minimizing our environmental footprint. Our ingredients are sourced from local farmers and producers, reducing food miles and supporting the community.

Community Engagement: Culinary Fusion Haven hosts regular workshops, tastings, and events to engage with the local community. We believe in sharing our passion for food and educating enthusiasts about the art of fusion cuisine.

Uncompromising Quality: Our commitment to excellence extends to every aspect of your dining experience. From the ingredients we select to the presentation on your plate, we strive for nothing less than perfection.

</p> </div> 
    <Footer1/>
    </>
   )
}
export default Mainpage;
