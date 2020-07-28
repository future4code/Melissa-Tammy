import knex from "knex";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase{
  private static TABLE_NAME = "User_aula55";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getconnection()
      .insert({
        id,
        email,
        password,
        role
      })
      .into(UserDatabase.TABLE_NAME);
      BaseDatabase.destroyConnection()
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
      BaseDatabase.destroyConnection()
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
      BaseDatabase.destroyConnection()
    return result[0];
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getconnection()
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
  }
}
