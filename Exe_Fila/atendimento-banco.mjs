//fila FIFO first in first out
/*

método isEmpty pra saber se a lista está vazia
1° nó => Head
2° nó => Tail
OP básicas em pilha: 
push => add no topo 
pop => remov do topo
peek => visu elemento do topo sem remov

*/


import Queue from "./Queue.mjs";
let filaBanco = new Queue();

filaBanco.enqueue(101);
filaBanco.enqueue(102);
filaBanco.enqueue(103);
filaBanco.enqueue(104);
filaBanco.enqueue(105);

console.log("Fila Atual 1: ", filaBanco.print())

//remover o primeiro da fila
console.log("Primeiro da lista: ", filaBanco.dequeue())


console.log(" Fila Atual 2: ", filaBanco.print());//result = 102, 103, 104, 105


filaBanco.enqueue(106);
filaBanco.enqueue(107);

console.log(" Fila Atual 3: ", filaBanco.print()); // result = 102, 103, 104, 105, 106, 107


console.log("O Próximo a ser atendido é: ", filaBanco.peek()); // result = 102

filaBanco.dequeue();


console.log("Lista atualizada: ", filaBanco.print()); //result = 103, 104, 105, 106,107













/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

    */