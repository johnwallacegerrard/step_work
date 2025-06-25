import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Steps from "./pages/Steps/Steps";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Journal from "./pages/Journal/Journal";
import StepDetail from "./components/StepDetail/StepDetail";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/steps" element={<Steps />} />
      <Route path="/steps/:stepNumber" element={<StepDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/journal"
        element={user ? <Journal /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
