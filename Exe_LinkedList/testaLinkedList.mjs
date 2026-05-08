import LinkedList from "./LinkedList.mjs"

let teste = new LinkedList()

teste.insertTail(10)
teste.insertTail(20)
teste.insertTail(30)


teste.remove(0)
teste.remove(0)

console.log("History: ", teste.removeHistoy())


const lista = new LinkedList();
lista.insertTail("A");
lista.insertTail("B");
lista.insertTail("C");

console.log("Antes de inverter:");
console.log(lista.print()); // Saída esperada: [ A, B, C ]

lista.reverse();

console.log("Depois de inverter:");
console.log(lista.print()); // Saída esperada: [ C, B, A ]

const coco = new LinkedList()
// Inserindo dados com repetições
coco.insertTail(10); // Valor no início
coco.insertTail(20);
coco.insertTail(10); // Valor no meio
coco.insertTail(30);
coco.insertTail(10); // Valor no fim

console.log("Antes da remoção total:", coco.print()); 
// Saída esperada: [ 10, 20, 10, 30, 10 ]

coco.removeAll(10);

console.log("Depois de remover todos os 10:", coco.print()); 

const minhaLista = new LinkedList();
minhaLista.insertTail("Arroz");
minhaLista.insertTail("Feijão");
minhaLista.insertTail("Azeite");

// Testando a transformação
const arrayDeDados = minhaLista.toArray();

console.log("Conteúdo da lista transformado em Array:");
console.log(arrayDeDados); 
// Saída esperada: ["Arroz", "Feijão", "Azeite"]

// Agora você pode, por exemplo, ver o tamanho facilmente
console.log(`O array tem ${arrayDeDados.length} itens.`);