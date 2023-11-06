export async function json(req, res) {
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

    res.setHeader('Content-type', 'application/json')
}

// MIDDLEWARE = INTERCEPTADOR
//INTERCEPTADOR = uma função que vai interceptar a requisição