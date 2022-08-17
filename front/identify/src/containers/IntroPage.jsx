import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Wavevs from "../components/Waves";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function IntroPage() {
  const location = useLocation();

  return (
    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </AnimatePresence>

      <Wavevs />
    </div>
  );
}

export default IntroPage;
