/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #limit
    #historyData
    #data       // Vetor privado

    constructor(limite) { //passa limite como parametro
    
        this.#historyData = []
        this.#data = []     // Vetor vazio
        this.#limit = limite

    }

    // Método para inserção no vetor
    push(val) {
        if(this.#data.length < this.#limit){
        this.#data.push(val)
        }else{
            console.log("Erro: Limite de 'Desfazer' atingido!")
        }
    }

    //----------------------------------------------------------
    // Método para remoção do vetor
    pop() {

        const remove = this.#data.pop()
        this.#historyData.push(remove)
        return remove

    }

    history(){
        return this.#historyData;
    }

    //------------------------------------------------------------
    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////