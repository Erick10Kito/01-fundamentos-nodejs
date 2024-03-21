// process.stdin.pipe(process.stdout)

import { write } from 'node:fs';
import {Readable, Transform, Writable} from 'node:stream'


//Strem de Leitura
class OneToHundredStream extends Readable {
    index = 1;

    _read() {
        const i = this.index++

       setTimeout(()=> {
        if(i > 100) {
            this.push(null)
        }else {
            const buf = Buffer.from(String(i))
            this.push(buf)
        }
       },1000)

    }
}


// Stream de Escrita
class MultiplyByTenStrem extends Writable {
    _write(chunk, encoding, callback) {
        //chunk = pedaço que a gente leu da stream
        // encoding = como a informação ta codificada
        // callback = função que stream de escrita chama quando ela terminou de fazer o que ela precisava fazer dentro da operação

        console.log(Number(chunk.toString())*10)
        callback()

    }
}



// Stream de Transformação
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) *-1
        callback(null, Buffer.from(String(transformed)))
    }
}


//  O que aconteceu aqui é que o MultiplyByTen esta pegando os dados que estão sendo lidos pela
//  OneToHundredStream e multiplicando por 10 assim que eles vão chegando,
//   ate que a stream de leitura termine de fazer toda a leitura

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStrem())