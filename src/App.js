import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage/landingPage";
import "./App.css";
import WatchPreview from "./components/WatchPreview/watchPreview";
import SizeComponent from "./components/SizeComponet/sizeComponent";
import CaseComponent from "./components/CaseComponent/caseComponent";
import BandComponent from "./components/BandComponent/bandComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/watch-preview" element={<WatchPreview />} />
        <Route path="/watch-sizes" element={<SizeComponent />} />
        <Route path="/watch-bands" element={<BandComponent />} />
        <Route path="/watch-cases" element={<CaseComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
