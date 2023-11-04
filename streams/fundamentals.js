//importação de uma stream de leitura
import {Readable} from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;
    //toda stream Readable tem um metodo obrigario que é o metodo abaixo:
    _read() {
        // esse metodo read vai retornar quais são os dados da Stream
        const i = this.index++ // somando mais um ao index

        if( i > 100) {
            this.push(null)
            // push é o metodo utilizado para uma Readable Stream fornecer informações para quem estiver consumindo ela
            // Quando digito 'null' quer dizer que eu não tenho mais informações para serem enviadas dessa stream
        }else {
            const buf = Buffer.from(i.toString()) // converti o i para string pois o Buffer não aceita Numeros e depois converti para buffer
            this.push(buf) 
        }
    }
}


//DENTRO DE UMA STREAM SÓ É POSSIVEL USAR O TIPO BUFFER, TIPOS PRIMITIVOS NÃO SÃO ACEITOS


new OneToHundredStream()
.pipe(process.stdout) // o pipe(process.stdout faz com que escreva os dados lidos no terminal)