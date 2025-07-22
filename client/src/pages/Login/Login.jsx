import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const { handleSigninSubmit } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(""), setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSigninSubmit({ email, password });
  };

  return (
    <div className="Login">
      <h1 className="Login__title">StepWork</h1>
      <form className="Login__form">
        <label htmlFor="email" className="Login__form-label">
          Email
          <input
            id="email"
            type="email"
            className="Login__form-input"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label htmlFor="password" className="Login__form-label">
          Password
          <input
            id="password"
            type="password"
            className="Login__form-input"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <div className="Login__form-btns">
          <button
            onClick={handleSubmit}
            type="submit"
            className="Login__form-btn"
          >
            Sign In
          </button>
          <Link to="/register" className="Login__form-btn">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
