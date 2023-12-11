const { Schema, model } = require("mongoose");

const questionSchema = new Schema ( {
    title: { type: String, required: true},
    answerA: {type: String, required: true},
    answerB: {type: String, required: true},
    answerC: {type: String, required: true},
    answerD: {type: String, required: true},
    correct: {type: String, required: true},
    nivel: {type: String, required: true}
},{
    versionKey: false // Para quitar las versiones en el documento
});

const questionModel = model("questions", questionSchema);

module.exports = questionModel;