import http from 'node:http'

const users = []
const server = http.createServer((req, res)=> {


//Stateful = SALVA EM MEMORIA
//Stateless = NÃO SALVA EM MEMORIA

// Cabeçalhos = mostram como o dado pode ser interpretado
const {method, url} = req
if(method === 'GET' && url ==='/users') {
    //RETORNO A CONSTANTE USERS NO GET
    return res.setHeader('Content-type', 'application/json') // aqui estou falando que o tipo do conteudo da requisição ou da repsosta é tipo aplicação em JSON
    .end(JSON.stringify(users))
}

if(method === 'POST' && url ==="/users") {
// CRIANDO USUARIOS:
users.push({
    id:1,
    name:'Jhon Doe',
    email:'jhondoe@example.com'
})
}
return res.end("HELLO")

})


server.listen(3333) 
