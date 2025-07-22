import { useState } from "react";
import { Link } from "react-router-dom";

function JournalEntry() {
  const [journalEntry, setJournalEntry] = useState("");

  return (
    <div className="journal">
      <p className="journal__title">Journal</p>
      <form className="journal__form">
        <textarea
          id="journal-entry"
          className="journal__form-input"
          type="string"
          value={journalEntry}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder="Your thoughts and feelings go here"
          required
        ></textarea>
      </form>
    </div>
  );
}

export default JournalEntry;
