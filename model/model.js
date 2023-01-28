const mongoose = require("mongoose");

const DataSchema = mongoose.Schema;

const possibleAnswer = DataSchema({
  ans: { type: String, required: true },
});

const questionSchema = new DataSchema({
  question: {
    required: true,
    type: String,
  },
  possibleAnswers: [String],
  correctAnswer: { type: String, required: true },
});
const sectionSchema = new DataSchema({
  name: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

const quizSchema = new DataSchema({
  title: {
    type: String,
    required: true,
  },
  sections: [sectionSchema],
});

module.exports = mongoose.model("Quiz", quizSchema);
