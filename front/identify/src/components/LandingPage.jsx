import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import googleLottie from "../assets/lottie_animations/google.json";
import githubLottie from "../assets/lottie_animations/github.json";
import linkedinLottie from "../assets/lottie_animations/linkedin.json";

function LandingPage() {
  return (
    <>
      <div className="w-screen h-full overflow-hidden">
        <div className="flex w-full h-full">
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
      </div>
    </>
  );
}

export default LandingPage;
