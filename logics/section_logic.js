const Model = require("../model/model.js");

const getAllSectionHandler = async (req, res) => {
  try {
    const d = await Model.findOne({ title: req.params.title });
    res.send(d);
  } catch (error) {
    console.log(error);
  }
};

const getSpecificSection = async (req, res) => {
  const { title, name } = req.params;

  try {
    const d = await Model.findOne({ title: title });
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

const patchASection = async (req, res) => {
  const { title, name } = req.params;
  try {
    const d = await Model.findOneAndReplace(
      { title: title, sections: { $elemMatch: { name: name } } },
      { title: title, sections: [req.body] },
      { new: true, strict: true }
    );
    res.send(d);
  } catch (error) {
    res.status(404).send(error);
    return;
  }
};

const postSection = async (req, res) => {
  try {
    const title = req.params.quiz_title;
    const query = await Model.findOneAndUpdate(
      { title: title },
      { $push: { sections: req.body } },
      { new: true }
    );
    res.send(query);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteSection = async (req, res) => {
  //To be done later
};

module.exports = {
  deleteSection,
  getAllSectionHandler,
  getSpecificSection,
  patchASection,
  postSection,
};
