import React from "react";
import "./Review.css";
import Slider from "react-slick";
import Reviewdata from "./Reviewdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
  const settings = {
    dots:false,
    autoplay:true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div
      // style={{
      //   display: "flex",
      //   justifyContent: "start",
      //   alignItems: "center",
      // }}
    >
      <div
        // style={{
        //   width: "40%",
        //   height: "80vh",
        //   padding: "4rem 1rem 0 1rem",
        // }}
      >
        <Slider {...settings}>
          {Reviewdata.map((item, index) => {
            return (
              <>
                <div className="card" key={index}>
                  <div className="content">
                    <h4 className="hed">{item.name}</h4>
                    <h6>{item.rating} <i class="fa-solid fa-star st"></i></h6>
                    <h6>{item.Description}</h6>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      <div
        style={{
          width: "60%",
          
          // border: "2px solid red",
        }}
      ></div>
    </div>
  );
};
export default Review;
