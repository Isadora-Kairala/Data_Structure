import LinkedList from "./lib/LinkedList.mjs";

const lista = new LinkedList()
console.log(`A lista está vazia? ${lista.isEmpty ? "Sim" : "Não"}`)

lista.insert(0, "Fusca")
lista.insert(0, "Corcel")

console.log(lista.print())

lista.insert(2, "Opala")
lista.insert(3, "Chevette")

console.log(lista.print())

lista.insertHead("Belina")
console.log(lista.print())

lista.insertTail("Gol")
console.log(lista.print())

lista.removeHead()
console.log(lista.print())

lista.remove(3)
console.log(lista.print())

let idxOpala = lista.indexOf("Opala")
let idxGol = lista.indexOf("Gol")
let idxNE = lista.indexOf("Belina")

console.log({idxGol, idxOpala, idxNE})

let pos0 = lista.peek(0)
let pos2 = lista.peek(2)
let pos4 = lista.peek(4)

console.log({pos0, pos2, pos4})