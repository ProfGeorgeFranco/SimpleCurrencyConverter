function sum(numbers) {
    // write your code here
    let resultado = 0;

    for (i = 0; i <= (numbers.length - 1); i++) {
        resultado += numbers[i];
        if ( numbers[i] === 0){
           break;
        }

    }
    return resultado;
}
