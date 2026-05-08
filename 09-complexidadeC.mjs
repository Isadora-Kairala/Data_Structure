function factorialIterativo(n){

    const inicio = performance.now();



    let resultado = 1;
    for(let i = 0; i <= n; i++){
        resultado *= i;
    }

    const fim = performance.now();
    const tempoGasto = fim - inicio;

    const memmoriaPilhaMB = (n * 4) / (1024 * 1024);

    let memoriaTotalMB = 'N/A';


    if(typeof process !== 'undefined' && process.memoryUsage()){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;

    }

    console.clear();
    console.log("\n---analise de complexidade iteratica O(n!)---");
    console.log("\nTamanho da entrada: ", n);
    console.log("\nResulta da fatorial: ", resultado);
    console.log("\nTempo de execução: ", tempoGasto, " ms")



}