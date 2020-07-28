import { BaseDatabase } from "./BaseDatabase";
import * as dotenv from "dotenv"
dotenv.config();

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "TestePost";

    public async createPost(
        id: string,
        title: string,
        content: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                id,
                title,
                content,
            })
            .into(PostDatabase.TABLE_NAME);
    }

    public async getPostById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select("*")
            .from(PostDatabase.TABLE_NAME)
            .where({ id });

        return result[0];
    }

    public async deletePostById(id: string): Promise<any> {
        const result = await this.getConnection()
            .delete()
            .from(PostDatabase.TABLE_NAME)
            .where({ id });

        return result[0];
    }
}