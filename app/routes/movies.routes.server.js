import { Router } from "express";

import { DisplayMovieList } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/movies-lists', DisplayMovieList);

export default router;