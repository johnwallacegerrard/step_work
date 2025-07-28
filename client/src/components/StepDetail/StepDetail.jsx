import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import steps from "../../assets/steps";
import "./StepDetail.css";
import Api from "../../utils/api";
import StepIntroModal from "../StepIntroModal/StepIntroModal";

const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

function StepDetail() {
  const { stepNumber } = useParams();
  const navigate = useNavigate();
  const step = steps.find((s) => s.stepNumber === parseInt(stepNumber));

  const [answers, setAnswers] = useState(step.questions.map(() => ""));

  useEffect(() => {
    const saved = localStorage.getItem(`step-${step.stepNumber}-draft`);
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, [step.stepNumber]);

  const handleSaveAndExit = () => {
    localStorage.setItem(
      `step-${step.stepNumber}-draft`,
      JSON.stringify(answers)
    );
    navigate("/");
  };

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    const isComplete = answers.every((ans) => ans.trim() !== "");
    if (!isComplete) {
      alert("Please answer all questions before submitting.");
      return;
    }

    api.submitStepAnswers(step.stepNumber, answers).then(() => {
      localStorage.removeItem(`step-${step.stepNumber}-draft`);

      navigate("/steps");
    });
  };

  if (!step) {
    return <div className="step__not-found">Step Not Found</div>;
  }

  return (
    <div className="step">
      <h1 className="step__title">Step One</h1>;
      <p className="step__quote">{step.stepQuote}</p>;
      <form onSubmit={handleSubmit} className="step__questions">
        {step.questions.map((question, index) => (
          <div key={index} className="step__question">
            <label
              htmlFor={`question${index}`}
              className="step__question-title"
            >
              {question}
            </label>
            <textarea
              id={`question${index}`}
              className="step__question-input"
              type="string"
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Your answer here..."
              required
            />
          </div>
        ))}
        <div className="step__btns">
          <button
            type="button"
            onClick={handleSaveAndExit}
            className="step__btn"
          >
            Save and Exit
          </button>
          <button type="submit" className="step__btn">
            Submit Step
          </button>
        </div>
      </form>
      <StepIntroModal />
    </div>
  );
}

export default StepDetail;
