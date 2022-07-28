import React from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />
      <div className="w-screen h-1/4">
      <p className="text-white fixed bottom-10 z-0">hhhhhhhh<br/>hhhhhhhhh</p>
      <svg className="fixed bottom-0" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 960 540">
        <path d="m0 386 32-7.8c32-7.9 96-23.5 160-36.2s128-22.3 192-18.3 128 21.6 192 21.6 128-17.6 192-13.6 128 29.6 160 42.5l32 12.8v154h-32-160-192-192-192-160-32z" fill="#26e0ed"/>
        <path d="m0 337 32 8.3c32 8.4 96 25 160 26.4 64 1.3 128-12.7 192-13.4 64-0.6 128 12 192 10.7s128-16.7 192-15.3c64 1.3 128 19.3 160 28.3l32 9v150h-32-160-192-192-192-160-32z" fill="#04b1ca"/>
        <path d="m0 383 32 0.3c32 0.4 96 1 160 5.7s128 13.3 192 12.2c64-1.2 128-12.2 192-16.4 64-4.1 128-1.5 192 6.5s128 21.4 160 28l32 6.7v115h-32-160-192-192-192-160-32z" fill="#0584a2"/>
        <path d="m0 463 32-8.3c32-8.4 96-25 160-34s128-10.4 192-3.5c64 6.8 128 21.8 192 24.6 64 2.9 128-6.5 192-10s128-1.1 160 0l32 1.2v108h-32-160-192-192-192-160-32z" fill="#0d5a77"/>
        <path d="m0 446 32 7.8c32 7.9 96 23.5 160 28.5s128-0.6 192-8.1 128-16.9 192-19.4 128 1.9 192 2.5c64 0.7 128-2.3 160-3.8l32-1.5v89h-32-160-192-192-192-160-32z" fill="#0a344c"/>
        <path className="z-10" d="m0 481 32 1.8c32 1.9 96 5.5 160 9.7s128 8.8 192 9.2c64 0.3 128-3.7 192-7.7s128-8 192-4.2c64 3.9 128 15.5 160 21.4l32 5.8v24h-32-160-192-192-192-160-32z" fill="#012"/>
      </svg>
      </div>
    </div>
  );
}

export default LandingPage;
