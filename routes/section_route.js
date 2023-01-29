const express = require("express");
const sectionRouter = express.Router();
const {
  getAllSectionHandler,
  getSpecificSection,
  patchASection,
  postSection,
  deleteSection,
} = require("../logics/section_logic.js");

sectionRouter.get("/:title", getAllSectionHandler);
sectionRouter.get("/one/:title&:name", getSpecificSection);
sectionRouter.patch("/:title&:name",patchASection);
sectionRouter.post("/:quiz_title", postSection);
sectionRouter.delete("/:quiz_title&:section",deleteSection);

module.exports = sectionRouter;
