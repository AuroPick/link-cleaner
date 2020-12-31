import express from "express";

import { getLinks, getLink, createLink} from "../controllers/links.js";

const router = express.Router();

router.get("/", getLinks);
router.get("/get-links", getLink);
router.post("/", createLink);

export default router;