import { randomUUID } from 'node:crypto'
import http from 'node:http'
import { json } from './middlewares/json.js'

const users = []
const server = http.createServer(async(req, res)=> {

const {method, url} = req

await json(req, res)

if(method === 'GET' && url ==='/users') {
    //RETORNO A CONSTANTE USERS NO GET
    return res
    .end(JSON.stringify(users))
}

if(method === 'POST' && url ==="/users") {
    //Desestruturação do body para pegar o nome e email que estão vindo do Insonmia:
    const {name, email} = req.body
// CRIANDO USUARIOS:    
users.push({
    id:randomUUID(),
    name, 
    email
    //tirei o valor de Nome e email pois o insonmia ja vai dar esse valor para nos
})
//Retornando um status Code de criação de sucesso
return res.writeHead(201).end()
}
//Retornando um status Code de erro de notFound
return res.writeHead(404).end()
})


server.listen(3334) 
