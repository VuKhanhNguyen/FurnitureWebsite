import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Header from "./components/commons/Header";
import Offcanvas from "./components/commons/OffCanvas";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
