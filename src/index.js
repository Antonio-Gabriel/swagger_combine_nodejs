const express = require("express");
const { router } = require("./routes");

// Development and Production Swagger Documentation
const swaggerDocsProd = require("./swaggerProd.json");
const swaggerDocsDev = require("./swagger.json");

const swaggerUi = require("swagger-ui-express");
const _ = require("lodash");

const { mergeDeep } = require("./utils/DeepMerge");

const app = new express();

app.use(express.json());
app.use("/v1", router);

// const swaggerMerge = { ...swaggerDocsDev, ...swaggerDocsProd };
// const swaggerMerge = _.merge(swaggerDocsDev, swaggerDocsProd);
const swaggerMerge =  mergeDeep(swaggerDocsDev, swaggerDocsProd);
console.log(swaggerMerge);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerMerge));

app.get("/terms", function (req, res) {
  return res.json({
    message: "Terms of Service",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
