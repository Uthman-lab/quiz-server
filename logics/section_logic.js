const quizes = require("../data");
const Model = require("../model/model.js");

const getAllSectionHandler = async (req, res) => {
  try {
    const d = await Model.findOne({ title: req.params.title });
    res.send(d.sections);
  } catch (error) {
    console.log(error);
  }
};

const getSpecificSection = async (req, res) => {
  const { title, name } = req.params;
  try {
    const d = await Model.findOne({ title: req.params.title });
    if (d) {
      const section = d.sections.find((val) => (val.name = name));
      res.send(section);
    }
    return;
  } catch (error) {
    res.status(404).send(error);
    return;
  }
};

const patchASection = (req, res) => {
  const { title, name } = req.params;
  const data = req.body;
  const quiz = quizes.find((val) => val.title == title);
  if (quiz) {
    let section = quiz.sections.find((val) => val.name == name);
    if (section) {
      const quizIndex = quizes.indexOf(quiz);
      const sectionIndex = quizes[quizIndex].sections.indexOf(section);
      quizes[quizIndex].sections[sectionIndex] = data;
      res.send(quizes[quizIndex]);
      return;
    }
  }
  res.status(404).send("not found");
  return;
};

const postSection = (req, res) => {
  const data = req.body;
  const quizTitle = req.params.quiz_title;
  const item = quizes.find((val) => val.title == quizTitle);
  if (item) {
    item.sections.push(data);
    res.send(item);
    return;
  } else {
    res.status(404).send("not found");
    return;
  }
};

const deleteSection = (req, res) => {
  const quizTitle = req.params.quiz_title;
  const sectionName = req.params.section;
  console.log(sectionName);
  const quiz = quizes.find((val) => val.title == quizTitle);
  if (quiz) {
    quiz.sections.splice(
      quiz.sections.findIndex((val) => val.name == sectionName),
      1
    );
    res.send(quizes);
    return;
  } else {
    res.status(404).send("not found");
    return;
  }
};

module.exports = {
  deleteSection,
  getAllSectionHandler,
  getSpecificSection,
  patchASection,
  postSection,
};
