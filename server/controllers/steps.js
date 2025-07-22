const User = require("../models/User");

const BadRequestError = require("../errors/BadRequestError");

const UnauthorizedError = require("../errors/UnauthorizedError");

const NotFoundError = require("../errors/NotFoundError");

const submitStepAnswers = (req, res, next) => {
  const { _id } = req.user;
  const { stepNumber } = req.params;
  const { answers } = req.body;

  User.findById(_id)
    .orFail()
    .then((user) => {
      if (user.currentStep === 0) {
        User.findByIdAndUpdate(
          _id,
          {
            stepProgress: [
              {
                stepNumber: stepNumber,
                answers: answers,
                completed: true,
              },
            ],
            currentStep: 1,
          },
          { new: true }
        )
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            if (err.name === "ValidationError") {
              return next(new BadRequestError("Invalid data"));
            }
            if (
              err.name === "CastError" ||
              err.name === "DocumentNotFoundError"
            ) {
              return next(new NotFoundError("Not found"));
            }
            return next(err);
          });
      } else {
        // user.stepProgress
        User.findByIdAndUpdate(
          _id,
          {
            $push: {
              stepProgress: {
                stepNumber: stepNumber,
                answers: answers,
                completed: true,
              },
            },
            currentStep: stepNumber + 1,
          },
          { new: true }
        )
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            if (err.name === "ValidationError") {
              return next(new BadRequestError("Invalid data"));
            }
            if (
              err.name === "CastError" ||
              err.name === "DocumentNotFoundError"
            ) {
              return next(new NotFoundError("Not found"));
            }
            return next(err);
          });
      }
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = { submitStepAnswers };
