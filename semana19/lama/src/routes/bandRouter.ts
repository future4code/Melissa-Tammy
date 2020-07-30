import express from "express";
import { BandController } from "../controller/BandController";


export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/createBand", bandController.createBand);
bandRouter.get("/:input", bandController.getBandByNameId);