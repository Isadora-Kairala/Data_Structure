import Queue from "./Queue (1).mjs";

// enqueue = push()
// dequeue = shift()

let fila = new Queue();

fila.enqueue(102);
fila.enqueue(103);
fila.enqueue(104);

console.log("\nCounts: ", fila.operation_Count());

fila.dequeue();

console.log("\nCounts: ", fila.operation_Count());






