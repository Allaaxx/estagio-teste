import { Router } from "express";
import { getHome } from "../controllers/getHome";
import { getFilmes } from "../controllers/getFilmes";
import { postFilme } from "../controllers/postFilme";
import { parsedFilmes } from "../controllers/parsedFilmes";

const router = Router();

router.get("/", getHome);
router.get("/filmes", getFilmes);
router.post("/filmes", postFilme);
router.get("/parsedFilmes", parsedFilmes); 

export { router };
