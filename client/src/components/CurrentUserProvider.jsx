import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import StepDetail from "../components/StepDetail/StepDetail";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Auth from "../utils/auth";

function CurrentUserProvider() {
  const auth = new Auth({
    baseUrl: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastInitial: "",
    stepProgress: "",
    currentStep: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = auth.getToken();

    if (!jwt) {
      return;
    } else {
      auth
        .getCurrentUser(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const handleRegisterSubmit = ({
    firstName,
    lastInitial,
    email,
    password,
  }) => {
    auth
      .register({ firstName, lastInitial, email, password })
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({
          firstName: data.firstName,
          lastInitial: data.lastInitial,
          stepProgress: data.stepProgress,
          currentStep: data.currentStep,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error;
      });
  };

  const handleSigninSubmit = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((user) => {
        console.log(user);
        setIsLoggedIn(true);
        setCurrentUser(user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignOut = () => {
    auth.clearToken();
    setIsLoggedIn(false);
    setCurrentUser({
      firstName: "",
      lastInitial: "",
      stepProgress: "",
      currentStep: "",
    });
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleSigninSubmit,
        handleRegisterSubmit,
        handleSignOut,
      }}
    >
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />

        <Route path="/:stepNumber" element={<StepDetail />} />
        <Route path="/login" element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route
          path="/register"
          element={isLoggedIn ? <Dashboard /> : <Register />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;
