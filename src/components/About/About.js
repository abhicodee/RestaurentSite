import React from 'react'
import "./About.css";
import Serviceprovider from './Serviceprovide';
const About=()=>{
  return(
<>
<div className="about-us">
<h2>About Us</h2>
<p>
  Welcome to Our Restaurant! We are dedicated to serving delicious and
  exquisite meals that will tantalize your taste buds and leave you
  craving for more.
</p>
<p>
  Our team of skilled chefs is committed to using the finest ingredients
  to create a memorable dining experience for you and your loved ones. With
  a passion for culinary creativity, we aim to provide a diverse and
  delectable menu that caters to all palates.
</p>
<p>
  Join us on a gastronomic journey as we strive to redefine the art of
  dining. Whether it's a romantic evening, a family celebration, or a
  casual get-together, our warm ambiance and exceptional service will make
  every visit a special one.
</p>
<p>
  Thank you for choosing Our Restaurant. We look forward to serving you
  and making your dining experience truly exceptional
</p>
<div className='cart-container'>
 {
  Serviceprovider.map((item)=>{
    return (
      <> 
    <div className='cart'>
    {/* <img src={item.image}></img> */}
    <h4>{item.name}</h4>
    <p >{item.description}</p>
    </div>
      </>
    )
  }) 
 }
</div>
</div>
</>
  )
}



export default About;
