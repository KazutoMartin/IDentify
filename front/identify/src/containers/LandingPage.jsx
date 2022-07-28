import React from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />
      <div className="w-screen h-full">
        <div className="h-3/4 w-full absolute bottom-0 bg-wave bg-no-repeat bg-center bg-cover"></div>
      </div>
    </div>
  );
}

export default LandingPage;
