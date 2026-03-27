import LinkedList from "./lib/LinkedList.mjs";

const list = new LinkedList();
console.log("A lista está vazia?\n", list.isEmpty === true ? "Sim" : "Não");
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
console.log(list.print());

list.insert("Fusca", 0)
list.insert("Civic", 1);
console.log(list.print());

list.insert("Gol", 2);
list.insert("Maverick", 2);
console.log(list.print());

list.insert("Brasília", 3)
list.insert("Opala", 4);

list.insertAtEnd("Puma");

list.insertAtStart("HB20");
console.log(list.print());

let removido = list.remove(2);
console.log("Removido:", removido);
console.log(list.print());

let idxFusca = list.indexOf("Fusca")
let idxOpala = list.indexOf("Opala")
let idxGol = list.indexOf("Gol")
let idxCivic = list.indexOf("Civic")

console.log({idxFusca, idxGol,idxOpala, idxCivic})

let pos0 = list.peek(0)
let pos1 = list.peek(1)
let pos4 = list.peek(4)

console.log({pos0, pos1, pos4})