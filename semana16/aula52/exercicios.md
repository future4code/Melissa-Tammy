### Exercício 1
*a.* 
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Exclui  a coluna salary

*b.*
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Altera o nome da coluna 'gender' para 'sex'

*c.* 
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Altera a quantidade máxima de caracteres.

*d.* Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2
*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
```sql
UPDATE Actor
SET name = "Mel", birth_date="1998-12-21"
WHERE id="003";
```

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.
```sql
UPDATE Actor
SET name = "JULIANA PÃES",
WHERE id="005";
```
```sql
UPDATE Actor
SET name = "Juliana Paes",
WHERE id="005";
```

c. Escreva uma query que atualize todas as informações do ator com o id `005`*
```sql
UPDATE Actor
SET name = "", salary="", birth_date="", gender="", type=""
WHERE id="005";
```

*d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
`0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0`
Não foi encontrado nenhum id que batesse com o id solicitado, então nada foi alterado.

### Exercício 3
*a.* Escreva uma query que apague a atriz com o nome Fernanda Montenegro.
```sql
DELETE from Actor
WHERE name = “Fernanda Montenegro”;
```
*b.* Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```sql
DELETE from Actor
WHERE salary > 1000000 AND gender="male";
```

### Exercício 4
*a.* Escreva uma query que pegue o maior salário de todos os atores e atrizes
```sql
SELECT MAX(salary) FROM Actor
```
*b.* Escreva uma query que pegue o menor salário das atrizes
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
*c.* Escreva uma query que pegue a quantidade de atrizes
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
*d. Escreva uma query que pegue a soma de todos os salários*
```sql
SELECT SUM(salary) FROM Actor
```

### Exercício 5
*a.* Releia a última query. Teste-a. Explique o resultado com as suas palavras
Pega a média de salário de acordo com o gênero.

*b.* Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

*c.* Faça uma query que retorne todos os atores ordenados pelo salário
```sql
SELECT * FROM Actor
ORDER BY salary;
```

*d.* Faça uma query que retorne os atores com os três maiores salarios
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

*e.* Faça uma query que retorne a média de salário por gênero
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6
*a.* Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```
*b.* Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
*c.* Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
```sql
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```
*d.* Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

### Exercício 7
*a.* Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
*b.* Qual a média das avaliações dos filmes?
```sql
SELECT AVG(rating) FROM Movie;
```
*c.* Qual a quantidade de filmes em cartaz?
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
*d.* Qual a quantidade de filmes que ainda irão lançar?
```sql
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
```
*e.* Qual a maior nota dos filmes?
```sql
SELECT MAX(rating) FROM Movie;
```
*f.* Qual a menor nota dos filmes?
```sql
SELECT MIN(rating) FROM Movie;
```

### Exercício 8
*a.* Retorne todos os filmes em ordem alfabética
```sql
SELECT * FROM Movie ORDER BY title;
```
*b.* Retorne os 5 primerios filmes em ordem descrente alfabética
```sql
SELECT * FROM Movie ORDER BY title LIMIT 5;
```
*c.* Retorne os 3 filmes mais recentes em cartaz
```sql
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
*d.* Retorne os 3 filmes melhor avalidos
```sql
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```


