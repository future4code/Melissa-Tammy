import axios from 'axios'

/********** E X E R C Í C I O 1 **********/
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers/all`);
    return response.data;
};

/*a) Qual endpoint você deve utilizar para isso?*
    Requisições que só precisam acessar dados da API são feitos pelo método GET*/
/*b) Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?*
    Com "nomeDaFuncao(): Promise<any[]>"*/
/*c) Implemente uma função nomeada que faça o que foi pedido.
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 2 **********/
const getSubscribersArrowFunction = async (): Promise<User[]> => {
    const response = await axios.get(`${baseUrl}/subscribers/all`);
    return response.data;
}

/*a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona*
    Na função nomeada o "async" vem antes de "function", na arrow, vai antes dos parenteses.
b. Implemente a função solicitada, usando arrow function
    Código, linhas 19 a 22
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 3 **********/
type User = {
    id: string;
    name: string;
    email: string;
}

const getSubscribersMap = async (): Promise<any[]> => {
    const subscribeResponse = await axios.get(`${baseUrl}/subscribers/all`);
    return subscribeResponse.data.map((response: any) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}

/*a. Se apenas trocarmos o retorno da função para: `Promise<User[]>` , teremos algum erro de tipagem?*
    Não, pois o tipo user contém os atributos corretos que são retornados pela API
b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso*
    O método get do axios devolve uma Promise<any>, o que não indica erro.
    O mapeamento à mão é para garantir que devolveremos o que a função indica.
c. Reimplemente a função, corretamente.
    Código, linhas 37 a 46.
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 4 **********/
async function createNews(): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title: "Quase finalizando o exercício",
        content: "biriri bororo",
        date: Date.now(),
    })
        .then((response) => {
            console.log("Noticia registrada!")
            sendNotificationsAll()
        }).catch((erro) => {
            console.log(erro)
        })
}

/*a. Qual é o tipo dessa função? Por quê?*
    Nomeada, o async vem antes de function.
*b. Implemente a função solicitada
    Código, linhas 58 a 70.
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 5 **********/
const sendNotifications = async (): Promise<void> => {
    const usersAPI = await axios.get(`${baseUrl}/subscribers/all`)
    const promiseArray: Promise<any>[] = [];
    for (const user of usersAPI.data) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: "Post novo galera!",
        });
    }
    console.log("All notifications sent");
};

/*a. O que aconteceria se fizéssemos a requisição dentro de um `forEach`? É recomendável utilizá-lo nesse caso?
    Os métodos de array não foram feitos para lidar com funções assíncronas.
b. Implemente a função solicitada
    Código, linhas 79 a 89.
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 6 **********/
const sendNotificationsAll = async (): Promise<void> => {
    const usersAPI = await axios.get(`${baseUrl}/subscribers/all`)
    const promiseArray = [];
    for (const user of usersAPI.data) {
        promiseArray.push(
            axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "Lave as mãos!",
            })
        );
    }
    await Promise.all(promiseArray);
};

/*a. O que o `Promise.all` faz?*
    Envia todas informações de uma vez
b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?*
    Diminui o tempo de execução.
c. Reimplemente a função utilizando `Promise.all`*
    Código, linhas 98 a 110.
____________________________________________________________________________________________________*/

/********** E X E R C Í C I O 7 **********/
const putSubscriber = async (): Promise<void> => {
    try {
        await axios.put(`${baseUrl}/subscribers`, {
            name: "Mel",
            email: "Mel@gmail.com"
        })
        console.log("Registrado!")
    } catch (error) {
        console.log(error)
    }
}

async function getSubscribersNotification(): Promise<any[]> {
    const usersAPI = await axios.get(`${baseUrl}/subscribers/all`);
    const promiseArray = [];
    for (const user of usersAPI.data) {
        
        promiseArray.push(await axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`));
    }
    await Promise.all(promiseArray);
    return promiseArray.map((not)=>{
        console.log(not.data) 
    });
};


/*a. Crie uma função que crie um novo assinante no nosso jornal*
    Código, linhas 121 a 131.
b. Crie uma função que seja responsável pela criação de uma notícia. Só que, dessa vez, além de criar a notícia, ela deve enviar uma notificação para cada um dos usuários.
    Código, linhas 58 a 70.
c. Crie uma função que pegue todas as notificações de todos os usuários da aplicação
    Código, linhas 133 a 144.
____________________________________________________________________________________________________*/

const main = async () => {
    const Subscribers = await getSubscribers()
    //console.log(Subscribers)
    const SubscribersArrow = await getSubscribersArrowFunction()
    //console.log(SubscribersArrow)
    const SubscribersMap = await getSubscribersMap()
    //console.log(SubscribersMap)
    //createNews()
    //sendNotifications()
    //sendNotificationsAll()
    //putSubscriber()
    //getSubscribersNotification()
}

main()