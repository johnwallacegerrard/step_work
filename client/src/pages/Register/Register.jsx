import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Register.css";

function Registration() {
  const { handleRegisterSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastInitial, setLastInitial] = useState("");

  useEffect(() => {
    setFirstName(""), setLastInitial(""), setEmail(""), setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterSubmit({ email, password, firstName, lastInitial });
  };

  return (
    <div className="Register">
      <h1 className="Register__title">StepWork</h1>
      <form onSubmit={handleSubmit} className="Register__form">
        <label htmlFor="first-name" className="Register__form-label">
          First Name
          <input
            id="first-name"
            type="string"
            className="Register__form-input"
            placeholder="First Name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </label>
        <label htmlFor="last-name-initial" className="Register__form-label">
          Last Initial
          <input
            id="last-name-initial"
            type="string"
            className="Register__form-input"
            placeholder="Last Initial"
            maxLength={1}
            required
            onChange={(e) => {
              setLastInitial(e.target.value);
            }}
            value={lastInitial}
          />
        </label>
        <label htmlFor="email" className="Register__form-label">
          Email
          <input
            id="email"
            type="email"
            className="Register__form-input"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label htmlFor="password" className="Register__form-label">
          Password
          <input
            id="password"
            type="password"
            className="Register__form-input"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <div className="Register__form-btns">
          <button type="submit" className="Register__form-btn">
            Register
          </button>
          <Link to="/Login" className="Register__form-btn">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Registration;
