import express from "express";

const router = express.Router();

router.get("/", getLinks);
router.post("/", postLink);

export default router;