import { ShowInputDTO } from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
    private showDatabase = new ShowDatabase();
    private idGenerator = new IdGenerator();

    async createShow(show: ShowInputDTO){
            const id = this.idGenerator.generate();
            console.log(id, show.week_day, show.start_time, show.end_time, show.band_id)
            await this.showDatabase.createShow(id, show.week_day, show.start_time, show.end_time, show.band_id);
            return id;
        };

    async getShowByNameId(input: string) {
        const showDatabase = new ShowDatabase();
        const show = await showDatabase.getAllShowsByDay(input);
        return show;
    }
}