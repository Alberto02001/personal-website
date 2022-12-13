import './App.scss'
import React, { useState } from "react";
import Home from './pages/home.tsx';

function App() {
  const [loading, setLoading] = useState(true);
  const load = document.getElementById("loading");
  if (load) {
    setTimeout(() => {
      load.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <Home/>
    </>
  );
}

export default App;
