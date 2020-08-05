### Crie uma função de lambda que receba um texto e retorne um objeto com dois parâmetros. O primeiro é um booleano (isEmail) que deve dizer se o texto é um email ou não. Já o segundo é uma string (reason) indicando o motivo daquela string não ser um email.
```
exports.handler = async (event) => {
    if (!event.email || event.email === "") {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing input" })
        };
    }

    if (!event.email || event.email.indexOf("@") === -1) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Não possui '@'"
            })
        };
    }

    if (!event.email || event.email.indexOf(".") === -1) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Não possui '.' "
            })
        };
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({isEmail: true}),
    };
    return response;
};
```