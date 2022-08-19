import React from 'react';

const WhyUs = () => {
    return (
        <div className="whyUs-bg bg-teal-600 p-10">
        <h1 className="text-white text-center text-5xl">Why Choose Us?</h1>
        <p className="text-white text-center p-4">
          GET ALL OF YOUR IMAGE EDITING SERVICE OF YOUR DIGITAL MEDIA WITH BEST
          QUALITY IN AFFORDABLE PRICE
        </p>
  
        <div className="text-center py-10">
          <ul class="steps steps-vertical lg:steps-horizontal text-white ">
            <li class="step step-primary">Register</li>
            <li class="step step-primary">Choose plan</li>
            <li class="step">Purchase</li>
            <li class="step">Receive Product</li>
          </ul>
        </div>
        <div className="lg:flex justify-around py-10">
          <div>
          <div className="flex gap-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white ml-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white">Time Saving</p>
          </div>
          <p className="text-white p-5">We value your Valuable time. Because time is money. Complete Your project in time. We always tyake care time-consuming productions.</p>
          </div>
          <div>
          <div className="flex gap-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white ml-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white">Cost Effeciency</p>
          </div>
          <p className="text-white p-5">We would be happy to show you how affordable our service is! You reduce your cost through our low price service and save your time.</p>
          </div>
         <div>
         <div className="flex gap-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white ml-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="text-white">Brilliant quality</p>
          </div>
          <p className="text-white p-5">We deliver brilliant quality product as if you made it yourself. It doesn't matter whether its images always in perfect quality.</p>
         </div>
        </div>
      </div>
    );
};

export default WhyUs;