import { Router } from "express";
import { getFilmes } from "../controllers/getFilmes";

const router = Router();

router.get("/filmes", getFilmes);

export { router };
