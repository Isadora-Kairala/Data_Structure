import Deque from "./lib/Deque.mjs";

// lista de compras
let listaCompras = new Deque()

console.log(listaCompras.print())
console.log(`A lista está vazia? ${listaCompras.isEmpty}`)

// Produtos Alimentícios -> Início
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Leite")

// Produtos Higiene/Limpeza -> Final
listaCompras.insertBack("Sabonete")
listaCompras.insertBack("Detergente")

console.log(`A lista está vazia? ${listaCompras.isEmpty}`)
console.log(listaCompras.print())

console.log(`Removido: ${listaCompras.removeBack()}`)
console.log(`Removido: ${listaCompras.removeFront()}`)

console.log(listaCompras.print())

listaCompras.insertBack("Creme")
listaCompras.insertBack("Acetona")

let primeiro = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log(`Primeiro: ${primeiro}\tUltimo: ${ultimo}`)
console.log(listaCompras.print())