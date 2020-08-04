### Comece esse exercício criando uma tabela no banco de dados para guardar as informações de um personagem de desenho, que deve possuir: um nome próprio, um nome de desenho e um link para sua imagem. Feito isso, crie uma função de lambda que deverá receber todas as informações necessárias para salvar um item nessa tabela. Você deve, ao menos, verificar se todas as informações estão preenchidas (ou seja, se não são undefined ou vazios)

```
exports.handler = async (event) => {
    if (!event.character) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing input" })
        };
    }

    if (!event.character.name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing name" })
        };
    }

    if (!event.character.cartoon) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing cartoon name" })
        };
    }

    if (!event.character.photo) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing cartoon photo" })
        };
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: "character is correct!" }),
    };
    return response;
};
```