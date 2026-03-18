
import Stack from "./Stack.mjs";


/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5) adiciona 5 no topo da pilha
    push(9) adiciona 9 no topo da pilha [5, 9]
    pop()  remove o elemento do topo, no caso, o 9
    push(3) add no topo da pilha [5,3]
    push(8) add no topo [5, 3, 8]
    pop() tira / remove o ultimo elemento, o do topo, 8 ficando[5, 3]
    pop() tira o do topo da pilha atual ficando: [5]
    push(6) add 6 ao topo ficando [5, 6]
    push() add null na ultima posição, já que o parametro está vazio [5, 6, null]
    push(2) add 2 na ultima posicao, no topo [5, 6, null, 2]
    pop() remove o elemento do topo ficando: [5, 6, null]
    push(10) add 10 ao topo [5, 6, null, 10]
    push(1) add 1 ao topo [5, 6, null, 10, 1]
    pop() tira o elemento do topo [5, 6, null, 10]
    pop() tira o elemento do topo novamente [5, 6, null]
    push(15) add 15 ao topo [5, 6, null, 15]
    pop() tira o ultimo/topo [5, 6, null]
    pop() tira o elemento do topo novamente [5, 6]
    
*/