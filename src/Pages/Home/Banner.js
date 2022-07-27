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
    <div className="">
      <div class="hero py-32 bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/Zzg7PcV/banner1jpg-sizing1.jpg" class="max-w-lg p-12 rounded-lg shadow-2xl" />
    <div className="px-12">
      <h1 class="text-5xl font-bold text-teal-600 text-center ">Open Sky</h1>
      <p class="py-6"> Our main product name is "Open Sky" which is Air pollution Monitoring system. It monitor the Air Quality over a webserver using internet and will trigger a alarm when the air quality goes down beyond a certain level, means when there are sufficient amount of harmful gases are present in the air like CO2, smoke, alcohol, benzene and NH3. </p>
      <button class="btn btn-accent px-12">Details</button>
    </div>
  </div>
</div>
<div class="hero  pb-32 bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/QXNrsJ3/manage-banner.jpg" class="max-w-lg p-12 rounded-lg shadow-2xl" />
    <div className="px-12">
      <h1 class="text-5xl font-bold text-teal-700 text-center">Manage App</h1>
      <p class="py-6"> Our main product name is "Open Sky" which is Air pollution Monitoring system. It monitor the Air Quality over a webserver using internet and will trigger a alarm when the air quality goes down beyond a certain level, means when there are sufficient amount of harmful gases are present in the air like CO2, smoke, alcohol, benzene and NH3. </p>
      <button class="btn btn-accent px-12">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
