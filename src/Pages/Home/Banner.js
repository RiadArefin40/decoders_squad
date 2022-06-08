import React, { Component } from "react";
import Slider from "react-slick";
import './Banner.css';

const Banner = () => {
  const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: true,
     speed: 1000,
     autoplaySpeed: 2000,
     cssEase: "linear",
   
  };
  return (
    <div className="parent">
     
      <Slider {...settings}>
        <div id="item1" className="carouselImg carousel-item w-full mx-auto container  ">
          <img src="https://i.ibb.co/m026Gr4/01.png" className="w-full mx-auto" />
          <div className="top-left  ">
              {/* <h1 className="text-4xl text-blue-400 font-mono">Best IOT Based <br /> Air Quality <br /> Monitoring <br /> System</h1> */}
          </div>
        </div>
        <div id="item2" className="carouselImg carousel-item w-full container  ">
          <img src="https://i.ibb.co/SJXGGz7/02.png" className="w-full mx-auto" />
        </div>
      </Slider>
 
    </div>
  );
};

export default Banner;
