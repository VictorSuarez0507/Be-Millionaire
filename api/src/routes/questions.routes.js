const express = require("express")
const { createQuestions, getNivelUno} = require("../controllers/questionController");

const Router = express.Router();

//outer.get("/", getQuestions);
Router.get("/", (req, res) => {
    res.status(200).send("funciona en la ruta");    
})
Router.get("/:id", getNivelUno);
Router.post("/newtask", createQuestions);


module.exports = Router;