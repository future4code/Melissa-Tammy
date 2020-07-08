### Exercício 1
**a)**Devolve o resultado da query e outras informações.

**b)**
```tsx
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return console.log(result[0][0])
}
```

**c)**
```tsx
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return console.log(count);
};
```

### Exercício 2
***a)***
```tsx
const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```
***b)***
```tsx
const deleteActor = async (id: string,): Promise<any> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};
```
***c)***
```tsx
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```
### Exercício 3
***a)*** Porque pega o id como parâmetro na url.
***b)*** Define o status code e o retorno.
***c)***
```tsx
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
### Exercício 4
***a)***
```tsx
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(
      req.body.id,
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

***b)***
```tsx
app.delete("/actor", async (req: Request, res: Response) => {
  try {
    await deleteActor(
      req.body.id
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5
```tsx
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  rating: number,
  releaseDate: Date,
  playingLimitDate: Date
): Promise<void> => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      rating: rating,
      release_Date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.rating,
      new Date(req.body.releaseDate),
      new Date(req.body.playingLimitDate)
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 6
```tsx
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 7
```tsx
const searchMovie = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie WHERE title LIKE "%${name}%"
  `)
  return result[0][0]
}

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
