import { Router } from "express";
import { getHome, getFilmes, postFilme, parsedFilmes,  } from "../controllers/filmesController";

const router = Router();

router.get("/", getHome);
router.get("/filmes", getFilmes);
router.post("/filmes", postFilme);
router.get("/parsedFilmes", parsedFilmes); 

export { router };
