//Aplicando streams no modo http de forma que esta recebendo dados do front-end
import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const  transformed = Number(chunk.toString())*-1 

        console.log(transformed)
        callback(null,Buffer.from(String(transformed))) 

    }
}


const server = http.createServer(async(req, res)=> {
const buffers = []

for await (const chunk of req) { //ira pegar cada pedaço da minha requisição e adicionar dentro do meu array de buffers, e a sintaxe 'for' e 'await' permite percorrer toda a stream e enquanto ela não percorrida por completa nada abaixo da linha vai ser executado
buffers.push(chunk)
}
const fullStreamContent = Buffer.concat(buffers).toString()
console.log(fullStreamContent)
return res.end(fullStreamContent)

// req.pipe(new InverseNumberStream())// Stream de leitura
// .pipe(res)// Stream de escrita
})
server.listen(3334)



