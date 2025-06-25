import "./Steps.css";
import steps from "../../assets/steps";
import { Link } from "react-router-dom";

function StepsPage() {
  return (
    <div className="steps">
      {steps.map((step) => {
        return (
          <div key={step.stepNumber} className="step">
            <Link
              to={`/steps/${step.stepNumber}`}
              className="step__title"
            >{`Step Number ${step.stepNumber}`}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default StepsPage;
