import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-backgroundColor box-border font-mono">
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;
