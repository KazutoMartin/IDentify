import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Wavevs from "../components/Waves";

function IntroPage() {
  return (
    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />
      <LandingPage />
      <Wavevs />
    </div>
  );
}

export default IntroPage;
