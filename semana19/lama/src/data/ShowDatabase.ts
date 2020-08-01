import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase {
    static TABLE_NAME = "Lama_Shows";

    public async createShow(
        id: string,
        week_day: string,
        start_time: string,
        end_time: string,
        band_id: string
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id,
                    week_day,
                    start_time,
                    end_time,
                    band_id
                })
                .into(ShowDatabase.TABLE_NAME);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getAllShowsByDay = async (day: string): Promise<Show[]> => {
        const result = await this.getConnection().raw(`
        SELECT * FROM ${ShowDatabase.TABLE_NAME}  
        WHERE week_day='${day}';
    `)
        return result[0][0];
    }
}
