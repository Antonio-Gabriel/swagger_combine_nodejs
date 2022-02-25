const express = require("express");
const { router } = require("./routes");
const swaggerDocs = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");

const app = new express();

app.use(express.json());
app.use("/v1", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3333, () => console.log("Server is running on port 3333"));
