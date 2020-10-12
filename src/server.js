const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 8000;

dbConnection();

app.use(express.json());
app.use(cors());

const customMiddleware = (req, res, next) => {
    console.log("HEy middlewares");
    next();
};
// app.use(customMiddleware);

//error handler middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {},
    });
});

app.get("/", customMiddleware, (req, res, next) => {
    res.send("hello ");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
