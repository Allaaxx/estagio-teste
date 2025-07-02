import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

router.get("/filmes", (req, res) => {
  res.json({ status: "OK" });
});

export { router };
