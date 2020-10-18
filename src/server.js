const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 8000;

dbConnection();

app.use(express.json());
app.use(cors());

//app level middleware
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);

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

//api documentation
if (process.env.NODE_ENV !== "production") {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// app.get("/", customMiddleware, (req, res, next) => {
//     res.send("hello ");
// });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
