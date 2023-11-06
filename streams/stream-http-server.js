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


const server = http.createServer((req, res)=> {
req.pipe(new InverseNumberStream())// Stream de leitura
.pipe(res)// Stream de escrita
})
server.listen(3334)


// TODAS PORTAS DE ENTRADA E SAIDA NO NODE SÃO STREAMS

// req = Stram de leitura
// res = stream de escrita
