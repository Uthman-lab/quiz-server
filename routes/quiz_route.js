const express = require("express");
const quizRouter = express.Router();

const {
  postHandler,
  getAllHandler,
  getQuizHandler,
  patchQuizHandler,
  deleteQuizHandler,
} = require("../logics/quiz_logic.js");

quizRouter.get("/", getAllHandler);
quizRouter.post("/", postHandler);
quizRouter.get("/:title", getQuizHandler);
quizRouter.patch("/:title", patchQuizHandler);
quizRouter.delete("/:title", deleteQuizHandler);

module.exports = quizRouter;
