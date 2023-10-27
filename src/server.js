import http from 'node:http'

// Criando primeiro servidor http:
const server = http.createServer((req, res)=> {


// GET => Buscar um recurso no back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação especifica de um recurso no back-end
//DELETE => Deletar um recurso do back-end


//GET /users => Buscando usuarios no back-end
//POST /users => Criando usuarios no back-end
const {method, url} = req // as requisições http precisam dessas duas informações(method, url)
if(method === 'GET' && url ==='/users') {
    return res.end('Listagem de Usuarios')
}

if(method === 'POST' && url ==="/users") {
    return res.end("Criação de usuarios")
}
return res.end("HELLO")

})


server.listen(3333) 
