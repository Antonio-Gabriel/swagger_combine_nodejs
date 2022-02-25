const express = require("express");
const { router } = require("./routes");

const app = new express();

app.use(express.json());
app.use("/v1", router);

app.listen(3333, () => console.log("Server is running on port 3333"));
