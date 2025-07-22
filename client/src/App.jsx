import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import CurrentUserProvider from "./components/CurrentUserProvider";

function App() {
  return <CurrentUserProvider></CurrentUserProvider>;
}

export default App;
