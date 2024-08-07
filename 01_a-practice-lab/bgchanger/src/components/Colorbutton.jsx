import React from "react";
import { useState } from "react";

const Colorbutton = () => {
  let [color, setColor] = useState("red");

  return (
    <>
      <div
        className="h-screen w-screen bg-gray-700 text-gray-900 grid place-content-center bg-gradient-to-t from-pink-400 to-blue-400 md:bg-gradient-to-r"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl font-normal hover:rotate-12 duration-300 delay-100 cursor-pointer hover:scale-90">
          Hello
        </h1>
        {/* <h1 className="text-4xl font-normal animate-bounce">Hello</h1>
        <h1 className="text-4xl font-normal animate-ping">Hello</h1>
        <h1 className="text-4xl font-normal animate-pulse">Hello</h1>
        <h1 className="text-4xl font-normal animate-spin">Hello</h1> */}
        {/* 
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-[500px] w-full md:max-w-2xl object-cover overflow-hidden"
              src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div> */}

        <button
          onClick={() => setColor("green")}
          type="button"
          className="text-white bg-gradient-to-r mt-5 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        >
          Purple
        </button>
      </div>
    </>
  );
};

export default Colorbutton;
