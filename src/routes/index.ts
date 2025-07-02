import { Router } from "express";
import { getHome, getFilmes, postFilme } from "../controllers/filmesController";

const router = Router();

router.get("/", getHome);
router.get("/filmes", getFilmes);
router.post("/filmes", postFilme);

export { router };
