class Node {
    constructor(val) {
        this.prev = null;
        this.data = val;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    #head;
    #tail;
    #count;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty() {
        return this.#count === 0;
    }

    get count() {
        return this.#count;
    }

    // método PRIVADO que encontra um nodo por sua posição
    #findNode(pos) {
        let node;

        // nodo encontra-se na PRIMEIRA metade da lista
        if (pos < this.#count / 2) {
            node = this.#head;
            for (let i = 0; i < pos; i++) {
                node = node.next;
            }
            // nodo encontra-se na SEGUNDA metade da lista
        } else {
            node = this.#tail;
            for (let i = this.#count - 1; i > pos; i--) {
                node = node.prev;
            }
        }

        return node;
    }

    // método para inserir em qualquer posição
    insert(pos, val) {
        let inserted = new Node(val);

        // 1º Caso: lista vazia
        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º Caso: inserção na primeira posição
        else if (pos === 0) {
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }

        // 3º Caso: inserção na última posição
        else if (pos >= this.#count) {
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        // 4º Caso: inserção em posição intermediária
        else {
            let nodePos = this.#findNode(pos);
            let before = nodePos.prev;

            before.next = inserted;

            inserted.prev = before;

            nodePos.prev = inserted;

            inserted.next = nodePos;
        }

        this.#count++;
    }

    // método de atalho para inserção na primeira posição
    insertHead(val) {
        this.insert(0, val);
    }

    // método de atalho para inserção na última posição
    insertTail(val) {
        this.insert(this.#count, val);
    }

    // método para remover um nodo da lista
    remove(pos) {
        // 1º Caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined;
        }

        let removed;

        // 2º Caso: remoção do primeiro nodo
        if (pos === 0) {
            removed = this.#head;
            this.#head = removed.next;

            if (this.#head) {
                this.#head.prev = null;
            }

            if (this.#count === 1) {
                this.#tail = null;
            }
        }

        // 3º Caso: remoção do último nodo
        else if (pos === this.#count - 1) {
            removed = this.#tail;

            this.#tail = removed.prev;

            if (this.#tail) {
                this.#tail.next = null;
            }

            if (this.#count === 1) {
                this.#head = null;
            }
        }

        // 4º Caso: remoção em posição intermediária
        else {
            removed = this.#findNode(pos);
            let before = removed.prev;
            let after = removed.next;

            before.next = after;
            after.prev = before;
        }

        this.#count--;
    
        return removed.data;
    }

    // método de atalho para remoção do primeiro nodo
    removeHead(){
        return this.remove(0);
    }

    // método de atalho para remoção do último nodo
    removeTail(){
        return this.remove(this.#count - 1);
    }

    // espiadinha
    peek(pos){
        // lista vazia ou fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count-1){
            return undefined;
        }

        const node = this.#findNode(pos);

        return node.data;
    }

    peekHead(){
        return this.peek(0);
    }

    peekTail(){
        return this.peek(this.#count-1);
    }

    indexOf(val){
        const middle = Math.ceil(this.#count/2);
        let node1 = this.#head; // começa na cabeça da lista
        let node2 = this.#tail; // começa na cauda da lista

        for(let pos = 0; pos < middle; pos++){
            // verifica se o valor está no node1
            if(val === node1.data) return pos;

            // verifica se o valor esta no node2
            if(val === node2.data) return this.#count - 1 - pos;

            // node1 avança via next
            node1 = node1.next

            // node2 retrocede via prev
            node2 = node2.prev
        }

        return -1;
    }

    print(){
        let output = "{ ";
        let node = this.#head;

        for(let i = 0; i < this.#count; i++){
            if(output !== "{ ") output += ", "
            output += `[${i}]: ${node.data}`
            node = node.next
        }

        output += ` }, count: ${this.#count}`

        return output
    }
}