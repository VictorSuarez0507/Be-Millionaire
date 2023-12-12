const express = require("express")
const { createQuestions, getNivelUno} = require("../controllers/questionController");

const Router = express.Router();


Router.get("/:id", getNivelUno);
Router.post("/newtask", createQuestions);


module.exports = Router;