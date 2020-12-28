import express from "express";

import { getLink, createLink} from "../controllers/links.js";

const router = express.Router();

router.get("/", getLink);
router.post("/", createLink);

export default router;