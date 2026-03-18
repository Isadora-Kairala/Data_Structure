export default class Deque{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // método para inserção no início da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }

    // método para inserção no fim da estrutura
    insertBack(val){
        this.#data.push(val)
    }

    // método para remoção no início da estrutura
    removeFront(){
        return this.#data.shift()
    }

    // método para remoção no fim da estrutura
    removeBack(){
        return this.#data.pop()
    }

    // consultar inicio da estrutura
    peekFront(){
        return this.#data[0]
    }

    // consultar fim da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Sim, está vazia" : "Não!"
    }

    // método para impressão da fila
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if (output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}