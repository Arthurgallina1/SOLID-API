const express = require("express");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const myMiddleware = (req, res, next) => {
    console.log("HEy middlewares");
};
app.use(myMiddleware);

app.get("/", (req, res, next) => {
    res.send("hello ");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
