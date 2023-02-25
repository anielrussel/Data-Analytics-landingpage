import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black w-full py-16 px-5 md:px-24 flex flex-col md:flex-row md:justify-between">
      <div>
        <h1 className="text-white font-bold text-xl md:text-3xl">
          Want tips and tricks to optimize your flow?
        </h1>
        <p className="text-white font-semibold py-2">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div className="md:w-[500px]">
        <div className="md:flex items-center md:justify-start gap-3 py-4 md:py-0">
          <form>
            <input
              type={"email"}
              placeholder="Enter your email"
              className="pt-3 pb-2 pl-3 w-full md:w-[310px] rounded-md mx-auto mt-2 md:mt-4 outline-none"
            />
          </form>
          <div className="flex items-center justify-center">
            <button className="bg-green-300 text-black py-2 px-16 rounded-lg font-bold mt-2 md:mt-4 md:py-2 md:px-9 md:text-lg hover:bg-white">
              Notify Me
            </button>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold py-2">
            We care about the protection of your data. Read our{" "}
            <a href="/" className="text-green-500 underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
