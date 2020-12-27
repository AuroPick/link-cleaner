import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";

import links from "./routers/links.js"

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/links", links)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Uygulama ${PORT} portunda başlatıldı.`)))
    .catch(error => console.log(error));

mongoose.set("useFindAndModify", false);