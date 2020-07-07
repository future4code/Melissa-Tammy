# Aula 51 - SQL
`CREATE TABLE Actor` (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

#### Exercício 1
**a)** Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
`CREATE TABLE` - cria uma tabela
`VARCHAR` - declarar string/char
`PRIMARY KEY` - declara a PK
`NOT NULL` - não nulo
`DATE` - data

**b)** O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES`e `SHOW TABLES`. Explique os resultados.
`SHOW DATABASES` - mostra o banco de dados
`SHOW TABLES` - mostra as tabelas

**c)** O comando `DESCRIBE`pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.
`SHOW Actor` - ERRO
`DESCRIBE Actor` - Mostra todos os detalhes da tabela Actor

#### Exercício 2
**b)** Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Entrada duplicada para chave primária.
A PK deve ser única, não aceita duplicatas.

**c)** Error Code: 1136. Column count doesn't match value count at row 1
A contagem de colunas não corresponde à contagem de valores na linha 1.
Está faltando dados.

**d)** Error Code: 1364. Field 'name' doesn't have a default value.
O campo Name não tem um valor padrão.
Name é not null, não aceita valor vazio.

**e)** Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
valor de data incorreta para birth_date. precisa de aspas.

#### Exercício 3
**a)** Escreva uma query que retorne todas as informações das atrizes
SELECT id, name from Actor WHERE gender = "female";

**b)** Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";

**c)** Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.
SELECT * from Actor WHERE gender = "invalid";

**d)** Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
SELECT id, name from Actor WHERE salary < 500000;

**e)** Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
Error Code: 1054. Unknown column 'nome' in 'field list'
não existe nome, existe name.

**a)** Explique com as suas palavras a query acima
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
Seleciona tudo da tabela Actor onde o nome comece com A ou J e o salário é maior que 300000

**b)** Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

**c)** Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
SELECT * FROM Actor
WHERE (name LIKE "%G%");

**d)** Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
#### Exercício 6
**a)** SELECT id, title, rating FROM Movie
WHERE id = "001";
**b)** SELECT * FROM Movie
WHERE title = "nome";
**c)** SELECT id, title, synopsis FROM Movie
WHERE rating > 7;

#### Exercício 7
**a)** SELECT * FROM Movie
WHERE (title LIKE "%vida%");