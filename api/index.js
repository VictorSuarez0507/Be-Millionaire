const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler");
const connectDB = require("./src/database/db");
const questionRoutes = require("./src/routes/questions.routes");

const app = express();
env.config();
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/game", questionRoutes)

app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server listening in port http://localhost:${port}`)
});




