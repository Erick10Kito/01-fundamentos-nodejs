import { randomUUID } from 'node:crypto'
import http from 'node:http'

const users = []
const server = http.createServer((req, res)=> {

const {method, url} = req

if(method === 'GET' && url ==='/users') {
    //RETORNO A CONSTANTE USERS NO GET
    return res.setHeader('Content-type', 'application/json') // aqui estou falando que o tipo do conteudo da requisição ou da repsosta é tipo aplicação em JSON
    .end(JSON.stringify(users))
}

if(method === 'POST' && url ==="/users") {
// CRIANDO USUARIOS:    
users.push({
    id:randomUUID(),
    name:'Erick Campos',
    email:'jhondoe@example.com'
})
//Retornando um status Code de criação de sucesso
return res.writeHead(201).end()
}
//Retornando um status Code de erro de notFound
return res.writeHead(404).end()
})


server.listen(3333) 
