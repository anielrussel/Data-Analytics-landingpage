import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-16 px-5 md:flex justify-between">
      <div className="w-full md:pr-[250px]">
        <h1 className="text-green-300 font-bold text-3xl">REACT.</h1>
        <p className="text-white font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          aut repellendus quasi amet culpa numquam? Soluta voluptates dicta
          magni quo velit. Qui, voluptas reiciendis harum modi a corrupti eaque
          culpa.
        </p>
        <div className="flex justify-between pt-8 md:justify-start md:gap-5">
          <FaFacebookSquare color="white" size={30} />
          <FaTwitterSquare color="white" size={30} />
          <FaInstagramSquare color="white" size={30} />
          <FaDribbbleSquare color="white" size={30} />
        </div>
      </div>
      <div className="flex justify-between pt-5 text-white w-full">
        <ul>
            <li>Solutions</li>
            <li>Anlytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
        </ul>
        <ul>
            <li>Solutions</li>
            <li>Anlytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
        </ul>
        <ul>
            <li>Solutions</li>
            <li>Anlytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
        </ul>
        <ul>
            <li>Solutions</li>
            <li>Anlytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
