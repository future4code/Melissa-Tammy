import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from 'moment'
import { stringify } from "querystring";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
    port: 3306,
    user: "julian_melissa_tammy",
    password: "",
    database: "julian_melissa_tammy_db",
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

const createUser = async (
  nickname: string,
  name: number,
  email: string
): Promise<void> => {
  if ((nickname && name && email) !== ('' && null && undefined)) {
    try {
      await connection
        .insert({
          id: String(Date.now() + nickname),
          nickname: nickname,
          name: name,
          email: email
        })
        .into("User");
    }
    catch{
      console.log("erro no createUser")
    }
  }


};

app.put("/user", async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.nickname,
      req.body.name,
      req.body.email
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

const createTask = async (
  user_id: string,
  title: string,
  description: string,
  deadline_: Date,
  status: string
): Promise<void> => {
  await connection
    .insert({
      id: String(Date.now()+"task"+user_id),
      user_id: user_id,
      title: title,
      description: description,
      deadline: deadline_,
      status: status
    })
    .into("Task");
};

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.deadline,
      req.body.status
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
/*
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

const getAllActor = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor;
  `)

  return result[0]
}

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0][0]
}

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

const updateGender = async (id: string, gender: string): Promise<any> => {
  await connection("Actor")
    .update({
      gender: gender,
    })
    .where("id", id);
};


const deleteActor = async (id: string,): Promise<any> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);
    return res.status(200).send(actor)

  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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
});*/
//createUser()
//getAllActor()
//getActorById("001");
