```
exports.handler = async event => {
    if (!event.user || !event.user.info) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing input" })
        };
    }
    const user = {
        name: event.user.info.name,
        email: event.user.info.email,
        password: event.user.info.password
    };

    if (!user.name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing name" })
        };
    }
    if (!user.email) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing email" })
        };
    }
    if (!user.password || user.password.length < 6) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid password" })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "User is correct"
        })
    };
};
```
________________________________________________________________________________________________

# b. Qual o retorno da função se ela receber um objeto vazio de entrada?
{ message: "Missing input" }
________________________________________________________________________________________________

________________________________________________________________________________________________

# c. Qual o retorno da função se ela receber este objeto como entrada:
{
    "user": {
        "name": "Astrodev"
    }
}

{ message: "Missing input" }
________________________________________________________________________________________________

________________________________________________________________________________________________


# d. Qual o retorno da função se ela receber este objeto como entrada:
let exercicio1_d = {
    "user": {
        "info": {
            "name": "Astrodev"
        }
    }
}

{ message: "Missing email" }
________________________________________________________________________________________________

________________________________________________________________________________________________

# e. Qual o retorno da função se ela receber este objeto como entrada:
{
    "user": {
        "info": {
            "name": "Astrodev",
            "email": "astrodev@f4.com.br",
            "password": "12345"
        }
    }
}

{ message: "Invalid password" }
________________________________________________________________________________________________

________________________________________________________________________________________________

# f. Qual o retorno da função se ela receber este objeto como entrada:
{
    "user": {
        "info": {
            "name": "Astrodev",
            "email": "astrodev@f4.com.br",
            "password": "123456"
        }
    }
}

{message: "User is correct"}
________________________________________________________________________________________________

# g. Onde devemos alterar para que a função retorne o status `422` caso o email seja inválido?
```
    if (!user.email) {
        return {
            statusCode: 422,
            body: JSON.stringify({ message: "Missing email" })
        };
    }
```
# h. Qual deve ser o objeto de entrada para que a função retorne o status `200`?
```
{
    "user": {
        "info": {
            "name": "Astrodev",
            "email": "astrodev@f4.com.br",
            "password": "123456"
        }
    }
}
```