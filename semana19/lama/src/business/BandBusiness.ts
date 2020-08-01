import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
    private bandDatabase = new BandDatabase();
    private idGenerator = new IdGenerator();

    async createBand(band: BandInputDTO){
            const id = this.idGenerator.generate();
            await this.bandDatabase.createBand(id, band.name, band.music_genre, band.responsible);
            return id;
        };

    async getBandByNameId(input: string) {
        const bandDatabase = new BandDatabase();
        const band = await bandDatabase.getBandByNameId(input);
        return band;
    }

    async getBandByResponsible(input: string) {
        const bandDatabase = new BandDatabase();
        const band = await bandDatabase.getBandByResponsible(input);
        return band;
    }
}