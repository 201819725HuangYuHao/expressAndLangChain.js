import { Express } from "express";

const bootstrap = (app: Express) => {
  app.use("/", (req, res) => {
    res.send("hello express");
  });
  app.listen(3000, () => {
    console.log("Server ready at localhost:3000");
  });
};

export default bootstrap;
