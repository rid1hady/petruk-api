import * as express from "express";
import jokeRoutes from "./joke.routes";

const router = express.Router();

router.use("/joke", jokeRoutes);

export = router;
