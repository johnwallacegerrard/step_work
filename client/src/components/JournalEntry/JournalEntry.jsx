import { useState } from "react";
import { Link } from "react-router-dom";
import "./JournalEntry.css";

function JournalEntry() {
  const [journalEntry, setJournalEntry] = useState("");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="journal">
      <h2 className="journal__title">Journal</h2>
      <form className="journal__form">
        <h3 className="journal__date">{currentDate}</h3>
        <textarea
          id="journal-entry"
          className="journal__form-input"
          type="string"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Your thoughts and feelings go here"
          required
        ></textarea>
        <div className="journal__btn-container">
          <button className="journal__open-journal-btn">Open Journal</button>
          <button className="journal__submit-entry-btn">Submit Entry</button>
        </div>
      </form>
    </div>
  );
}

export default JournalEntry;
