import { Request, Response } from "express";
import { ShowInputDTO, DayInputDTO } from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import {Authenticator} from "../services/Authenticator";
import {UserDatabase} from "../data/UserDatabase"
import {BandDatabase} from "../data/BandDatabase"

export class ShowController {
    async createShow(req: Request, res: Response) {

        try {
            const token = req.headers.authorization as string;
            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);
            const userDb = new UserDatabase();
            const user = await userDb.getById(authenticationData.id);
            const bandDb = new BandDatabase();
            const bandName = await bandDb.getBandByResponsible(user.name);
            console.log(bandName)
            const input: ShowInputDTO = {
                week_day: req.body.week_day,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                band_id: bandName
            }

            const showBusiness = new ShowBusiness();
            await showBusiness.createShow(input);

            res.status(200).send({ message: "show successfully created" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAllShowsByDay(req: Request, res: Response) {
        const showBusiness: ShowBusiness = new ShowBusiness();

        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            
            const day: DayInputDTO = {
                week_day: req.params.day as string,
            };
            const show = await showBusiness.getShowByNameId(day.week_day);

            res.status(200).send({ show: show });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}