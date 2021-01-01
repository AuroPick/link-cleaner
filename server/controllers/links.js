import express from "express";

import PostLink from "../models/PostLink.js";

const router = express.Router();

export const getLinks = async (req, res) => {
  const page = parseInt(req.query.page || "0");
  try {
    const total = await PostLink.countDocuments({});
    const links = await PostLink.find()
      .sort({ createdAt: -1 })
      .limit(16)
      .skip(16 * page)
      .exec();

    res.status(200).json({ totalPages: Math.ceil(total / 16), links });
  } catch (error) {
    res.status(404).json({ messaga: error.message });
  }
};

export const getNewLinks = async (req, res) => {
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
