import { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Steps from "../../components/Steps/Steps";
import JournalEntry from "../../components/JournalEntry/JournalEntry";

function Dashboard() {
  const { currentUser, handleSignOut } = useContext(CurrentUserContext);
  console.log(currentUser);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data[0]) {
          setQuote(data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quote:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard__welcome-message">
        Welcome back, {currentUser?.firstName + " " + currentUser?.lastInitial}!
      </h2>
      <button
        type="button"
        onClick={handleSignOut}
        className="dashboard__sign-out-btn"
      >
        Sign Out
      </button>
      <div className="dashboard__quote-container">
        {loading ? (
          <p className="dashboard__quote-loading">
            Loading your daily quote...
          </p>
        ) : quote ? (
          <>
            <p className="dashboard__quote">"{quote.q}"</p>
            <p className="dashboard__quote-author">— {quote.a}</p>
          </>
        ) : (
          <p className="dashboard__quote-error">Could not load quote.</p>
        )}
      </div>
      <div className="dashboard__component-container">
        <Steps />
        <JournalEntry />
      </div>
    </div>
  );
}

export default Dashboard;
