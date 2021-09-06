
/* Percorrer de 0 ao numero de Alunos. */
  
  let NumeroDeAlunos = 10;

for (let contador = 0; contador <= NumeroDeAlunos; contador++) {
    console.log(contador)
}


/* - Se o numero for Par, escreva 'PAR' e o número correspondente.
   - Se o numero for IMPAR, escreva 'IMPAR' e o número correspondente.
   - Se o numero for Zero, escreva 'ZERO'.
*/

let contador = 0;

while (contador <= NumeroDeAlunos) {
    if (contador == 0) {
        console.log(`O NUMERO É ${contador}  -> ZERO`)
    } else if (contador % 2 ==0) {
        console.log(`O número ${contador} é --> IMPAR`)
    } else {
        console.log(`O número ${contador} é --> PAR`)
    }
    contador++;    
}

