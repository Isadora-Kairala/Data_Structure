import DoublyLinkedList from "./lib/DoublyLinkedList.mjs";

const lista = new DoublyLinkedList();

console.log("Lista está vazia? ", lista.isEmpty ? "Sim, está vazia" : "Não está")
console.log(lista.print())

lista.insert(0, "Fiat")
lista.insert(0, "Opala")

console.log(lista.print())

lista.insertTail("Chevette")

console.log(lista.print())

lista.insert(1, "Corsel")

console.log(lista.print())

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
let posFiat = lista.indexOf(`Fiat`)

console.log(`Pos0: ${pos0}\nPos1: ${pos1}\nIndex of 'Fiat': ${posFiat}`)