
    import Stack from "./Stack.mjs";

    let pilhaa = new Stack();
    let pilhab = new Stack();
    let pilhac = new Stack();

    pilhab.push(1);
    pilhab.push(2);
    pilhab.push(3);
    pilhab.push(4);


    console.log("------ANTES--------")
    console.log("\nTORRE A: ", pilhaa.print());
    console.log("\nTORRE B: ", pilhab.print());
    console.log("\nTORRE C: ", pilhac.print());


    pilhac.push(pilhab.pop());
    pilhaa.push(pilhab.pop());

    // 1 -----------------------

    pilhaa.push(pilhac.pop());
    pilhac.push(pilhab.pop());

    //2 -----------------------

    pilhab.push(pilhaa.pop());
    pilhac.push(pilhaa.pop());

    //3------------------------

    pilhac.push(pilhab.pop());
    pilhaa.push(pilhab.pop());

    //4------------------------

    pilhaa.push(pilhac.pop());
    pilhab.push(pilhac.pop());


    // 5-----------------------
    pilhab.push(pilhaa.pop());
    pilhaa.push(pilhac.pop());


    //6 ----------------------

    pilhac.push(pilhab.pop());
    pilhaa.push(pilhab.pop());

    //7-----------------------
    pilhaa.push(pilhac.pop());
    console.log("\nTORRE A: ", pilhaa.print());
    console.log("\nTORRE B: ", pilhab.print());
    console.log("\nTORRE C: ", pilhac.print());






















    /*
        1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

        2. Cada uma das torres do jogo se comporta como uma pilha.

        3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

        3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
        
        4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

        5. Implemente o método correto que move um disco de uma torre para outra.

        6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
        conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
        ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
    */