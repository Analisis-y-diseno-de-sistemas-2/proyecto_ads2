import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
