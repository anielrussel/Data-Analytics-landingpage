import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-5">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center max-w-[1150px] mx-auto">
        <img src={laptop} alt="/" className="w-[500px] md:w-[650px]" />
        <div className="py-2">
          <h1 className="text-green-500 font-bold md:text-xl py-2">
            DATA ANALYTICS DASHBOARD
          </h1>
          <p className="text-black font-bold text-2xl md:text-3xl">
            Manage Data Analytics Centrally
          </p>
          <p className="text-gray-800 font-semibold md:text-md pt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            voluptate quas repudiandae similique explicabo impedit voluptatibus
            dignissimos totam quae vel, necessitatibus ducimus nisi laboriosam
            nesciunt quis iusto nostrum aperiam itaque!
          </p>
          <div className="flex justify-center items-center md:justify-start">
            <button className="bg-black text-white py-2 px-12 rounded-lg font-bold mt-5 md:mt-4 md:py-2 md:px-9 md:text-lg border hover:bg-white hover:border-black hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
