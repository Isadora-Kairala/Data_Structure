export default class Stack{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // método para inserção no vetor
    // método pode ser criado com qualquer nome
    push(valor){
        this.#data.push(valor)
    }

    // método de remoção do vetor
    pop(){
        return this.#data.pop()
    }

    // verificar qual o ultimo elemento
    peek(){
        return this.#data[this.#data.length-1]
    }

    // verifica se está vazio
    get isEmpty(){
        return this.#data.length === 0
    }

    // exibir a pilha
    print(){
        return JSON.stringify(this.#data)
    }


}