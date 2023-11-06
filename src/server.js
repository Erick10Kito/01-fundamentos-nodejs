import { randomUUID } from 'node:crypto'
import http from 'node:http'

const users = []
const server = http.createServer(async(req, res)=> {

const {method, url} = req
const buffers = []

for await (const chunk of req) { 
buffers.push(chunk)
}
try { // ira tentar executar o codigo dentro das chaves
  req.body = JSON.parse(Buffer.concat(buffers).toString()); // vai pegar os dados que estão sendo postados no servidor atraves de um post do Insonmia

} catch { // caso de erro ele executa o que esta dentro das chaves do catch
req.body = null
}
//LEMBRANDO QUE COM O REQ.BODY EU CRIEI UMA NOVA PROPRIEDADE CHAMADA BODY DENTRO DO REQ 

if(method === 'GET' && url ==='/users') {
    //RETORNO A CONSTANTE USERS NO GET
    return res.setHeader('Content-type', 'application/json')
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
