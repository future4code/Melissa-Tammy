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

### Exercício 3
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