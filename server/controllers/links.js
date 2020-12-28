import express from "express";
import mongoose from "mongoose";

import PostLink from "../models/postLink.js";

const router = express.Router();

export const getLink = async (req, res) => {
    try {
        const link = await PostLink.find().limit(8).sort({ createdAt: -1 }).exec();

        res.status(200).json(link);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createLink = (req, res) => {
    const { link } = req.body;

    PostLink.countDocuments({ link: link }, async (err, count) => {
        if (count > 0) {
            res.status(409).json({ message: "link mevcut" });
        } else {
            const postLink = new PostLink({ link: link });

            try {
                await postLink.save();

                res.status(201).json(postLink);
            } catch (error) {
                res.status(409).json({ message: error });
            }
        }
    });
};

export default router;
