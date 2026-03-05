import Stack from "./lib/Stack.mjs";

let pilha = new Stack()
console.log(pilha.print())
console.log("Está vazio? "+ pilha.isEmpty)


pilha.push(25)
pilha.push(30)
pilha.push(35)

console.log("EStá vazio? " + pilha.isEmpty)

let removido = pilha.pop()

console.log({removido}, pilha.print())

let ultimo = pilha.peek()

console.log(ultimo)