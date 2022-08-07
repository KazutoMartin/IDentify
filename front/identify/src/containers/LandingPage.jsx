import React from "react";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import googleLottie from "../assets/lottie_animations/google.json";
import githubLottie from "../assets/lottie_animations/github.json";
import linkedinLottie from "../assets/lottie_animations/linkedin.json";

function LandingPage() {
  const constraintsRef = useRef(null);
  return (
    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />
      <div className="w-screen h-full overflow-hidden">
        {/* <p className="text-white flex justify-center	 bottom-10 z-0">
          h<br />h<br />h<br />h<br />h<br />h<br />h<br />h
          <br />
          h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />hvhv<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />h<br />hhhhhhhhhhh<br />h<br />h<br />h<br />h<br />v<br />h<br />h<br />
        </p> */}
        <div className="flex w-full h-full" ref={constraintsRef}>
          <div className="flex justify-left items-center h-full w-1/6"></div>
          <div className="flex justify-center items-center  h-full w-1/3">
            <motion.div
              initial={{ x: -700, opacity: 0, scale: 0.5, y: -500 }}
              animate={{ x: 0, opacity: 1, scale: 1, y: -80 }}
              transition={{ ease: "backInOut", duration: 2 }}
            >
              <h1 className="text-white font-title font-bold text-8xl">
                We Care
                <br />
                About <br /> Your <br />
                Privacy
              </h1>
            </motion.div>
          </div>
          <div className="flex justify-left items-center  h-full w-1/3">
            <div className="flex flex-col h-full w-full">
              <div className="flex flex-row h-1/3 w-full">
                <div className="flex justify-center items-center w-full z-50">
                  <motion.div
                    initial={{ x: 400, opacity: 0, scale: 0.5, y: -500 }}
                    animate={{ x: 0, opacity: 1, y: 0, scale: 1 }}
                    transition={{ ease: "backInOut", duration: 3 }}
                    drag
                    dragSnapToOrigin
                    dragTransition={{
                      bounceStiffness: 10,
                      bounceDamping: 1,
                    }}
                    whileHover={{ scale: 1.2, cursor: "grabbing" }}
                    whileTap={{ scale: 1.3, cursor: "grabbing" }}
                    className="flex justify-center items-center"
                  >
                    <Lottie
                      style={{ height: "40%", width: "40%" }}
                      animationData={googleLottie}
                      loop={true}
                    />
                  </motion.div>
                </div>
                <div className="flex justify-center items-center w-full z-50">
                  <motion.div
                    initial={{ x: 400, opacity: 0, scale: 0.5, y: -500 }}
                    animate={{ x: 0, opacity: 1, scale: 1, y: 0 }}
                    transition={{ ease: "backInOut", duration: 4 }}
                    drag
                    dragSnapToOrigin
                    dragTransition={{
                      bounceStiffness: 10,
                      bounceDamping: 1,
                    }}
                    whileHover={{ scale: 1.2, cursor: "grabbing" }}
                    whileTap={{ scale: 1.3, cursor: "grabbing" }}
                    className="flex justify-center items-center"
                  >
                    <Lottie
                      style={{ height: "40%", width: "40%" }}
                      animationData={githubLottie}
                      loop={true}
                    />
                  </motion.div>
                </div>
                <div className="flex justify-center items-center w-full z-50">
                  <motion.div
                    initial={{ x: 400, opacity: 0, scale: 0.5, y: -500 }}
                    animate={{ x: 0, opacity: 1, scale: 1, y: 0 }}
                    transition={{ ease: "backInOut", duration: 5 }}
                    drag
                    dragSnapToOrigin
                    dragTransition={{
                      bounceStiffness: 5,
                      bounceDamping: 1,
                    }}
                    whileHover={{ scale: 1.3, cursor: "grabbing" }}
                    whileTap={{ scale: 1.4, cursor: "grabbing" }}
                    className="flex items-center justify-center bg-blue-300 rounded-lg p-7"
                  >
                    <Lottie
                      style={{ height: "60%", width: "60%" }}
                      animationData={linkedinLottie}
                      loop={true}
                    />
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="flex w-full justify-center items-start z-10"
                initial={{ y: 100, opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ease: "backInOut", duration: 2 }}
              >
                <p className="font-logo text-white text-2xl">
                  We gladly gather your information from these services and
                  introduce you better to other services!
                </p>
              </motion.div>
              <div className="flex w-full h-16 z-10 items-center mt-10">
                <motion.div
                  className="flex w-1/2 justify-start h-full"
                  initial={{ y: 150, opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ease: "backInOut", duration: 3.75 }}
                >
                  <button
                    type="button"
                    className="h-full w-2/3 sml:px-3 sml:text-xs font-font1 font-thin text-white text-lg rounded-xl px-5 py-2 border border-sea bg-black hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
                  >
                    Get started
                  </button>
                </motion.div>
                <motion.div
                  className="flex w-1/2 justify-start h-full"
                  initial={{ y: 150, opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ease: "backInOut", duration: 3.75 }}
                >
                  <button
                    type="button"
                    className="h-full w-2/3 sml:px-3 sml:text-xs font-font1 font-bold text-black text-lg rounded-xl px-8 bg-white hover:shadow-black hover:shadow-md hover:scale-110 hover:duration-300"
                  >
                    Sign in
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center  h-full w-1/6"></div>
        </div>
        <svg
          className="fixed bottom-0 z-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 960 540"
        >
          <path
            className="opacity-20"
            d="m0 386 32-7.8c32-7.9 96-23.5 160-36.2s128-22.3 192-18.3 128 21.6 192 21.6 128-17.6 192-13.6 128 29.6 160 42.5l32 12.8v154h-32-160-192-192-192-160-32z"
            fill="#26e0ed"
          />
          <path
            className="opacity-30"
            d="m0 337 32 8.3c32 8.4 96 25 160 26.4 64 1.3 128-12.7 192-13.4 64-0.6 128 12 192 10.7s128-16.7 192-15.3c64 1.3 128 19.3 160 28.3l32 9v150h-32-160-192-192-192-160-32z"
            fill="#04b1ca"
          />
          <path
            className="opacity-40"
            d="m0 383 32 0.3c32 0.4 96 1 160 5.7s128 13.3 192 12.2c64-1.2 128-12.2 192-16.4 64-4.1 128-1.5 192 6.5s128 21.4 160 28l32 6.7v115h-32-160-192-192-192-160-32z"
            fill="#0584a2"
          />
          <path
            className="opacity-50"
            d="m0 463 32-8.3c32-8.4 96-25 160-34s128-10.4 192-3.5c64 6.8 128 21.8 192 24.6 64 2.9 128-6.5 192-10s128-1.1 160 0l32 1.2v108h-32-160-192-192-192-160-32z"
            fill="#0d5a77"
          />
          <path
            className="opacity-60"
            d="m0 446 32 7.8c32 7.9 96 23.5 160 28.5s128-0.6 192-8.1 128-16.9 192-19.4 128 1.9 192 2.5c64 0.7 128-2.3 160-3.8l32-1.5v89h-32-160-192-192-192-160-32z"
            fill="#0a344c"
          />
          <path
            className="opacity-70"
            d="m0 481 32 1.8c32 1.9 96 5.5 160 9.7s128 8.8 192 9.2c64 0.3 128-3.7 192-7.7s128-8 192-4.2c64 3.9 128 15.5 160 21.4l32 5.8v24h-32-160-192-192-192-160-32z"
            fill="#012"
          />
        </svg>
      </div>
    </div>
  );
}

export default LandingPage;
