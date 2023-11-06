const buf = Buffer.from("ok")

console.log(buf) // o retorno dele é 'Buffer 6f 6b' quando estiver escrito 'ok' dentro do Buffer, e esse retorno é basicamente um hexadecimal onde cada um representa uma das letras do texto 'ok', o '6f' é o 'o' e o '6b' é o 'k' 

console.log(buf.toJSON()) // converte o arquivo para json e agora ele sera representado no console de maneira binaria, ouseja, domente com numeros


// BUFFERS = é uma maneira de representação de dados na memoria que o node utiliza