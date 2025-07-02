import { Router } from "express";

const router = Router();
const { filmes } = require("../database");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

router.get("/filmes", (req, res) => {
  res.json(filmes);
});

export { router };
