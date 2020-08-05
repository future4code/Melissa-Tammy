### Crie uma função de lambda que receba dois números e retorne, em seu body, a sua soma deles dois

```
exports.handler = async (event) => {
    if (!event.numbers || !event.numbers.first || !event.numbers.second) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing input" })
        };
    }

    const numbers = {
        first: event.numbers.first,
        second: event.numbers.second,
    };

    const response = {
        statusCode: 200,
        body: JSON.stringify(first+second),
    };
    return response;
};
```

{
    "numbers": {
        "first": 5,
        "second": 5
    }
}