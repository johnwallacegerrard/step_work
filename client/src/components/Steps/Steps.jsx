import steps from "../../assets/steps";
import "./Steps.css";
import { Link } from "react-router-dom";

function Steps() {
  return (
    <div className="steps">
      <h2 className="steps__title">Steps</h2>
      <div className="steps__container">
        {steps.map((step) => {
          return (
            <div key={step.stepNumber} className="steps__step-container">
              <Link
                to={`/${step.stepNumber}`}
                className="steps__step"
              >{`Step ${step.stepNumber}`}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Steps;
