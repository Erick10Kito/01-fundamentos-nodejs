import { randomUUID } from 'node:crypto'
import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'
// Agora com o database criado irei coloca-lo para funcionar no meu servidor:
const database = new Database()
const server = http.createServer(async(req, res)=> {

const {method, url} = req

await json(req, res)

if(method === 'GET' && url ==='/users') {
const users = database.select("users") // para listar eu pego o que tem dentro da tabela cujo nome eu passei, nesse caso é users
    return res.end(JSON.stringify(users))
}

if(method === 'POST' && url ==="/users") {
    //Desestruturação do body para pegar o nome e email que estão vindo do Insonmia:
    const {name, email} = req.body
// CRIANDO USUARIOS:    
const user = { 
    id:randomUUID(),
    name, 
    email

}

database.insert("users", user) //Agora passo no inserto o nome da tabela e a informação que vou inserir como dado dessa tabela  

return res.writeHead(201).end()
}
//Retornando um status Code de erro de notFound
return res.writeHead(404).end()
})


server.listen(3334) 
