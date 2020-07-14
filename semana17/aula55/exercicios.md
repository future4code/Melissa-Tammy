### Exercício 1
**a.** O uso de string para representar IDs é melhor do que usar números, pois string aceitam letras e caracteres especiais, aumentando a diferença de combinações.

### Exercício 2
**a.** O código conecta no BD e cria um novo User.

**b.** 
```sql
CREATE TABLE User_aula55 (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

**c.** 
```tsx
import knex from "knex";

export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	private static TABLE_NAME = "User_aula55";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
		.into(UserDatabase.TABLE_NAME);
  }
}
```
**d**.
```tsx
const teste = new UserDatabase()
teste.createUser("000", 'meltammy@gmail.com', '123456')
```

### Exercício 3
**a.** Define que não pode ser undefined.

### Exercício 7
**a.** Define que não pode aceitar qualquer coisa pois não podemos prever o tipo do valor de retorno.