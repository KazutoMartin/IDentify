import React from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav class="bg-transparent border-gray-200 sm:px-20 py-2.5 rounded md:px-10 h-1/6 items-center flex mx-10 sml:mx-2 z-10">
      <div class="container flex flex-wrap justify-between items-center mx-auto z-50">
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 1.25 }}
          href="#"
          class="flex items-center	"
        >
          <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span
            class="self-center text-2xl font-logo text-white whitespace-nowrap"
            onClick={() => navigate("/")}
          >
            IDENTIFY
          </span>
        </motion.a>
        <div class="flex w-1/2 justify-end space-x-6">
          <motion.button
            onClick={() => navigate("/sign-up")}
            initial={{ opacity: 0, scale: 0, y: -50 }}
            animate={{ x: 0, opacity: 1, scale: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 0.5 }}
            class="sml:px-3 sml:text-xs font-font1 font-thin text-white text-base rounded-xl px-5 py-2 border border-sea hover:bg-hoverbutton hover:text-black hover:font-thin hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
          >
            Get started
          </motion.button>
          <motion.button
            onClick={() => navigate("/sign-in")}
            initial={{ opacity: 0, scale: 0, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 1 }}
            class="sml:px-3 sml:text-xs font-font1 font-bold text-black text-base rounded-xl px-8 bg-white hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
          >
            Sign in
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
