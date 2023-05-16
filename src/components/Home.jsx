// eslint-disable-next-line no-unused-vars
import React from "react";
import headerImage from "../assets/header-image.jpg";
import Courses from './Courses';

const Home = () => {
  return (
   <>
    <div
      className="object-cover w-full"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className="pt-8 text-description text-center align-center align-middle w-9/12 mx-auto md:w-8/12 lg:w-1/2">
        <h1 className=" text-4xl font-semibold text-slate-950 leading-normal md:text-6xl">
          Courses For Web Development and App Development
        </h1>
        <p className="text-gray-800 text-lg  md:pt-4">
            Welcome to our comprehensive online platform offering courses for
            Web Development and App Development! Whether you're a beginner or an
            experienced developer looking to enhance your skills, our website
            provides a wide range of courses designed to cater to your learning
            needs.
        </p>
      </div>
    </div>
    <Courses></Courses>
    </>
  );
};

export default Home;
