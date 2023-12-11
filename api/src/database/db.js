const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

const connectDB = async () => {
    try {
        const conection = await mongoose.connect(process.env.MONGO_URI,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  
        console.log("Conexion a base de datos exitosa");
        return conection
    } catch (error) {
        handleError(error);
    }
}

module.exports = connectDB;