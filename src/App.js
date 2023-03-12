import './App.scss'
import React, { useState, useEffect } from "react";
import Home from './pages/home.tsx';

function App() {
  const [eng, setEng] = useState(null);
  const [ita, setIta] = useState(null);
  const [loading, setLoading] = useState(false);

  const getEng = () => {
    fetch("translations/eng.json")
    .then((response) => response.json())
    .then((response) => setEng(response))
    .then((response) => setLoading(true))   
  }

  const getIta = () => {
    fetch("translations/ita.json")
    .then((response) => response.json())
    .then((response) => setIta(response))
    .then((response) => setLoading(true)) 
  }

  useEffect(() => {
    setTimeout(() => {
      getEng()   
      getIta()
    }, 100);
  }, [])

  const load = document.getElementById("loading");
  if (load) {
    setTimeout(() => {
      load.style.display = "none";
    }, 1000);
  }

  return (
    <>
    {loading ? <Home ita={ita} eng={eng}/> : ""}
    </>
  );
}

export default App;
