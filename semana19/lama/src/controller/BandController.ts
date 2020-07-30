import { Request, Response } from "express";
import { BandInputDTO, NameIdInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import {Authenticator} from "../services/Authenticator"
export class BandController {
    async createBand(req: Request, res: Response) {
        try {

            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }

            const userBusiness = new BandBusiness();
            const token = await userBusiness.createBand(input);

            res.status(200).send({ message: "band successfully created" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getBandByNameId(req: Request, res: Response) {
        const bandBusiness: BandBusiness = new BandBusiness();

        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            const input: NameIdInputDTO = {
                nameId: req.params.input as string,
            };
            const band = await bandBusiness.getBandByNameId(input.nameId);

            res.status(200).send({ band: band });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}