const express = require("express");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler");
const connectDB = require("./src/database/db");
const questionRoutes = require("./src/routes/questionsRoutes")

const app = express();
const port = 3000;
connectDB();

app.use(express.json()); 
app.use(cors());

app.use("/game", questionRoutes)

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening in port http://localhost:${port}`)
});
