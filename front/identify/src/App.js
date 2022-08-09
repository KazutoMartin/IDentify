import "./App.css";
import IntroPage from "./containers/IntroPage";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <IntroPage />
    </div>
  );
}

export default App;
