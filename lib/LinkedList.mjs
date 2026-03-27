class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // Início da lista (cabeça)
    #tail // Fim da lista (cauda)
    #count // Quantidade de nodos da lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Getter que retorna se a lista encadeada está vazia
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {
        // Cria um nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        // 1º Caso: a lista está vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º Caso: lista não vazia, inserção na primeira posição
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }

        // 3º Caso: inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4º Caso: inserção no meio da lista
        else {
            let before = this.#head
            for (let i = 1; i < pos; i++) {
                before = before.next
            }

            let after = before.next

            inserted.next = after
            before.next = inserted
        }


        this.#count++
    }

    // método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    //método para inserção na ultima posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {
        //1º Caso: a lista está vazia ou a posição informada está fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        let removed

        // 2º Caso: remoção do inicio da lista
        if (pos === 0) {
            removed = this.#head
            this.#head = this.#head.next

            if (this.#count === 1) {
                this.#tail = null
            }
        }

        // 3º Caso: remoção de nodo intermediário ou final
        else{
            let before = this.#head

            for(let i = 1; i < pos; i++){
                before = before.next
            }

            removed = before.next

            let after = removed.next

            before.next = after

            // atualiza o tail em caso de remoção
            if(pos === this.#count -1){
                this.#tail = before
            }
        }


        this.#count--

        return removed.data
    }


    //metodo pra remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    //método para remover o ultimo nodo da lista (atalho)

    removeTail() {
        return this.remove(this.#count - 1)

    }

    indexOf(val){
        //1° caso: lista vazia
        if(this.isEmpty){
            return -1
        }

        let node = this.#head 

        for(let i = 0; i < this.#count; i++){
            if(node.data === val){
                return i
            }

            node = node.next
        }

        return -1
    }

    peek(pos) {
        // 1° caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined;
        }
        // 2° caso: busca sequencial
        let node = this.#head;
        for (let i = 0; i < pos; i++) {
            node = node.next;
        }
        return node.data;
    }

    peekHead() {
        return this.peek(0);
    }

    peekTail() {
        return this.peek(this.#count - 1);
    }

    // Impressão da lista
    print() {
        let output = "("
        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
          if(output !== "(") {
            output += ", "
          }  
          output += `[${i}]: ${node.data}`
          node = node.next
        }
        output += `)`
        return output
    }
}
 
    

    




