//importação de uma stream de leitura
import {Readable, Transform, Writable} from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;
    //toda stream Readable tem um metodo obrigario que é o metodo abaixo:
    _read() {
        // esse metodo read vai retornar quais são os dados da Stream
        const i = this.index++ // somando mais um ao index

       setTimeout(()=> {
        if( i > 100) {
            this.push(null)
            // push é o metodo utilizado para uma Readable Stream fornecer informações para quem estiver consumindo ela
            // Quando digito 'null' quer dizer que eu não tenho mais informações para serem enviadas dessa stream
        }else {
            const buf = Buffer.from(i.toString()) // converti o i para string pois o Buffer não aceita Numeros e depois converti para buffer
            this.push(buf) 
        }
       },1000)
    }
}

//Stream de escrita:
class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) { // usa obrigatoriamente o metodo write que recebe 3 parametros
//chunk = pedaço que foi lido pela stream de leitura
// encoding = é como que a informação esta codificada
// Callback = é uma função que a stream de escrita precisa chamar quando ela terminou de fazer o que ela precisava fazer com aquela informação
console.log(Number(chunk.toString())*10) 
callback() // para encerrar a stream      
}
}


// Stream de Transformação:
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const  transformed = Number(chunk.toString())*-1 // inverte o sinal do valo passado no chunk
        callback(null,Buffer.from(String(transformed))) // o primeiro parametro é um possivel, que euando der algum erro ira aparecer esse parametro, e o segundo parametro é o valor transformado

    }
}


//DENTRO DE UMA STREAM SÓ É POSSIVEL USAR O TIPO BUFFER, TIPOS PRIMITIVOS NÃO SÃO ACEITOS


new OneToHundredStream() // estou lendo com a stream de leitura
.pipe(new InverseNumberStream) // stream de tranformação, ela le dados da strem de leitura e escreve dados para a stream de escrita, ou seja ela faz os dois
.pipe(new MultiplyByTenStream) // estou escrevendo com a stream de escrita



// O codigo acima mostra como eu consigo trabalhar com os dados que estão chegando enquanto ainda tem dados sendo lidos