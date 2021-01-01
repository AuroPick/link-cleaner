import express from "express";

import { getLinks, getNewLinks, createLink} from "../controllers/links.js";

const router = express.Router();

router.get("/", getLinks);
router.get("/get-links", getNewLinks);
router.post("/", createLink);

export default router;