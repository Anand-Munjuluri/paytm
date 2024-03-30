const express = require("express");
const mainRouter = require("../backend/routes/index")
const app = express();


app.use("/api/v1", mainRouter); //app.use is used to create/run middlewares
// it is also used to route requests that start with certain substrings over to another router

