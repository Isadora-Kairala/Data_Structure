export default class Queue{

    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // método para inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    // método para remoção na fila
    dequeue(){
        return this.#data.shift()
    }

    // método para consultar o primeiro da fila
    peek(){
        return this.#data[0]
    }

    // método para verificar se a fila esta vazia
    get isEmpty(){
        return this.#data.length === 0
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