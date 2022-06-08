import React from "react";

const Aboutus = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src="https://i.ibb.co/6mkSSP3/03.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-teal-400 mb-5"> About Us</h2>
          <h1 className="text-5xl font-bold">
            Specialist <span className="text-teal-500">Iot Solution</span>  with 5 years of experience
          </h1>
          <p className="py-6">
            Deocders squad is a research and development team. We have
            successfully completed many projects in the past and we have
            participated in many national and international competitions. our
            focus and research area are:
          </p>
          <ul className="text-teal-600">
         
             <li> <div className="badge  badge-md">Internet of things IoT</div></li> 
             <li><div className="badge badge-success badge-md">Cyber security</div></li>
             <li><div className="badge badge-md">Robotics</div></li>
             <li><div className="badge badge-success badge-md">Blockchain</div></li>
             <li><div className="badge badge-md">Software development</div></li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
