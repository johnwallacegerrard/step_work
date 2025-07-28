import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";

import CurrentUserProvider from "./components/CurrentUserProvider";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <CurrentUserProvider></CurrentUserProvider>
      <Footer />
    </>
  );
}

export default App;
