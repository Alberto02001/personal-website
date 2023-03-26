import './App.scss'
import React from "react";
import Home from './pages/home.tsx';
import i18 from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './translations/eng.json'
import itJSON from './translations/ita.json'

const it = itJSON

const eng = enJSON

i18
  .use(initReactI18next)
  .init({
    resources : {
      en : {translation: eng},
      it : {translation: it}
    },
    lng : "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false}
  })

function App() {

  const load = document.getElementById("loading");
  if (load) {
    setTimeout(() => {
      load.style.display = "none";
    }, 1000);
  }

  return (
    <>
    <Home/>
    </>
  );
}

export default App;
