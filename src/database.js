export class Database {
    #database = {}

    select(table) { 
        // No select eu passo a tabela que eu quero selecionar
        const data = this.#database[table] ?? [] // vai procurar se existe algum array dentro do database que tenha o nome que foi passado no parametro, caso tenha ele ira salvar na constante data, caso não exista retorna um array vazio
   
   
   return data
    } 

    insert(table, data) {  // Recebe como parametro a tabela do banco de dados que eu quero fazer a inserção e os dados que eu quero fazer inserção
if(Array.isArray(this.#database[table])) { // esse if verifica se tem um array com o nome da tabela passada no parametro 'table'
this.#database[table].push(data) // caso tenha ele ira adicionar os dados que ja existem dentro de database
}else {
    this.#database[table] = [data] // caso não tenha eu criarei um novo array com o item inserido na tabela     
}
return data
    }
}