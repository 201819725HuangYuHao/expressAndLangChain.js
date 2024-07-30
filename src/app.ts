import express from "express";
import bootstrap from "./middleware/bootstrap";
const app = express();
bootstrap(app);
