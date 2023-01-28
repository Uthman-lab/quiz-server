const express = require('express')
const sectionRouter = express.Router();
const sectionLogics = require('../logics/section_logic.js')


sectionRouter.get('/:title', sectionLogics.getAllSectionHandler)
sectionRouter.get("/:title&:name", sectionLogics.getSpecificSection)
sectionRouter.patch("/:title&:name", sectionLogics.patchASection)
sectionRouter.post("/:quiz_title", sectionLogics.postSection)
sectionRouter.delete("/:quiz_title&:section", sectionLogics.deleteSection)

module.exports = sectionRouter;
