### Exercício 1
**a.** Chave estrangeira relaciona duas tabelas ao referenciar a chave primária de outra tabela.

**b.**
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
        "002",
    "A minha nota para esse filme é dó",
    1,
        "006"
);
```

**c.** `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails` (`julian_melissa_tammy_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível referenciar algo que não existe.

**d.** 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

**e.** `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails` (`julian_melissa_tammy_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possivel deletar uma linha que está sendo referenciada por FK.



### Exercício 2
**a.** Esta tabela apresenta duas FKs, referenciando as PK de Movie e Actor.

**b.** 
```sql
INSERT INTO MovieCast (movie_id, actor_id) 
VALUES ("biriri", "bororo");
```

**c.** `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails` (`julian_melissa_tammy_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível referenciar algo que não existe.

**d**.`` Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails`` (`julian_melissa_tammy_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possivel deletar uma linha que está sendo referenciada por FK.

### Exercício 3
**a.** Seleciona tudo da tabela Movie onde os dados id e movie_id são iguais. O ON indica a condição.

**b.**
```sql
SELECT r.rate as rate, m.id as id, m.title as title FROM Movie m INNER JOIN Rating r ON m.id = movie_id;
```

### Exercício 4
**a.**
```sql
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

**b.**
```sql
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```
**c.**
```sql
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 5
**a.** Existe 2 JOINs porque o primeiro relaciona 2 tabelas, e o segundo relaciona o resultado da combinação dessas 2 tabelas com uma terceira tabela.

**b.**
```sql
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

**c.** Tem uma virgula em vez de ponto.
``SELECT m.id as movie_id, ``m,title``, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;``

**d.**
```sql
SELECT m.title, a.name, r.rate, r.comment FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 6
**a.** N:M

**b.**
```sql
CREATE TABLE Oscar (
    name VARCHAR(255) NOT NULL,
		date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

**c.** 
```sql
INSERT INTO Oscar (name, date, movie_id) 
VALUES (
        "Óscar de melhor teste2",
    "2020-07-20",
        "006"
);
```

**d.**
```sql
SELECT m.title, o.name FROM Movie m
LEFT JOIN Oscar o ON m.id = o.movie_id;
```



