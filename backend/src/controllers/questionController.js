const questionModel = require("../models/questionModel")

const createQuestions = async (req, res) => {
    try {
        const result = new questionModel(req.body);
        const taskSave = await result.save(); 
        res.status(200).json({mensaje:"Pregunta creada" , taskSave});
        } catch (error) {
          res.status(500).send("Ocurrio un error al crear la pregunta");
        }
}

const getNivelUno = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await questionModel.aggregate(
            [ { $match: { nivel: id} }, { $sample: { size: 1 } }  ]
        );
        res.json(result);
    } catch (error) {
        res.status(500).send("Ocurrio un error al mostrar la pregunta");
      }
}

module.exports = {
    createQuestions, 
    getNivelUno
}