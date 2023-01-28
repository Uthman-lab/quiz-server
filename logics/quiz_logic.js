const Model = require("../model/model.js");

const postHandler = async (req, res) => {
  try {
    const d = new Model(req.body);
    const savedData = await d.save();
    res.send(savedData);
    return;
  } catch (error) {
    res.status(401).send(error);
    return;
  }
};

const getAllHandler = async (req, res) => {
  try {
    const data = await Model.find();
    res.send(data);
    return;
  } catch (error) {
    res.status(404).send(error);
    return;
  }
};

const getQuizHandler = async (req, res) => {
  try {
    const d = await Model.findOne({ title: req.params.title });
    res.send(d);
    return;
  } catch (error) {
    res.status(404).send("not found");
    return;
  }
};

const patchQuizHandler = async (req, res) => {
  try {
    const d = await Model.findOneAndReplace(
      { title: req.params.title },
      req.body
    );
    res.send(d);
    return;
  } catch (error) {
    res.status(404).send(error);
    return;
  }
};

const deleteQuizHandler = async (req, res) => {
  try {
    console.log(req.params.title);
    const d = await Model.findOneAndDelete({ title: req.params.title });
    res.send("done");
    return;
  } catch (error) {
    res.status(404).send(error);
    return;
  }
};

module.exports = {
  postHandler,
  getAllHandler,
  getQuizHandler,
  patchQuizHandler,
  deleteQuizHandler,
};
