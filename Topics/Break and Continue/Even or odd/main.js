function checkEvenOrOdd(numbers) {
    for (i = 0; i <= numbers.length - 1; i++){

        if (numbers[i] == 0){
            break;
        } else if (numbers[i] % 2 == 0) {
                console.log("even");
        }else {
            console.log("odd");
        }
    }
}