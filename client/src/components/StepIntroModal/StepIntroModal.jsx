import { useParams } from "react-router-dom";
import steps from "../../assets/steps";

import "./StepIntroModal.css";

function StepIntroModal() {
  const introModal = document.querySelector(".modal");
  const { stepNumber } = useParams();
  const step = steps.find((s) => s.stepNumber === parseInt(stepNumber));

  const closeModal = () => {
    introModal.classList.add("modal_closed");
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__intro">{step.stepIntro}</p>
        <button onClick={closeModal} className="modal__close-btn">
          {`Begin step ${step.stepNumber}`}
        </button>
      </div>
    </div>
  );
}

export default StepIntroModal;
