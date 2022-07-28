import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav class="bg-transparent border-gray-200 sm:px-20 py-2.5 rounded md:px-10 h-1/6 items-center flex">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-logo text-white whitespace-nowrap">
            IDENTIFY
          </span>
        </a>
        <div class="flex w-1/2 justify-end space-x-6">
          <button
            type="button"
            class="font-font1 font-thin text-white text-base rounded-xl px-5 py-2 border border-sea hover:bg-hoverbutton hover:text-black hover:font-thin hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
          >
            Get started
          </button>
          <button
            type="button"
            class="font-font1 font-bold text-black text-base rounded-xl px-8 bg-white hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
          >
            Sign in
          </button>
        </div>
        {/* <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta"> */}
        {/* <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">bloh</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">bloh</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">bloh</a>
          </li>
        </ul> */}
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
