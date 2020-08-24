import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "Lama_Bands";

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public getBandByNameId = async (nameId: string): Promise<Band> => {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${BandDatabase.TABLE_NAME}  
        WHERE name='${nameId}' OR id='${nameId}';
    `)

    return result[0];
  }

  public getBandByResponsible = async (name: string): Promise<string> => {
    const result = await this.getConnection().raw(`
        SELECT id FROM ${BandDatabase.TABLE_NAME}  
        WHERE responsible='${name}';
    `)
    return (result[0][0].id);
  }
}
