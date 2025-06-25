const mongoose = require("mongoose");

const StepProgressSchema = new mongoose.Schema({
  stepNumber: Number,
  answers: [String],
  completed: { type: Boolean, default: false },
});

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    paswordHash: {
      type: String,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 1,
    },
    StepProgress: [StepProgressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
