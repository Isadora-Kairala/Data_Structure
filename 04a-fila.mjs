import Queue from "./lib/Queue.mjs";

let fila = new Queue()

console.log(fila.print())
console.log("Está vazia? " + fila.isEmpty)

fila.enqueue("Marina")
fila.enqueue("Isadora")
fila.enqueue("Laura")

console.log(fila.print())

let proximo = fila.peek()
console.log("Próximo: "+ proximo)

console.log("- Atendido: "+ fila.dequeue())

proximo = fila.peek()
console.log("Próximo: "+ proximo)

console.log(fila.print())