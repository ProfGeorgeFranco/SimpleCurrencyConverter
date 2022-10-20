input = require('sync-input');

const taxas = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};
let sigla = ["USD", "JPY", "EUR", "RUB", "GBP"];

function converter(){
    console.log("What do you want to convert?");
    let userFrom = input("From: ").toUpperCase();
    if (!sigla.includes(userFrom)) {
        console.log("Unknown currency");
        return;
    }
    let userTo = input("To: ").toUpperCase();
    if  (!sigla.includes(userTo)) {
        console.log("Unknown currency");
        return;
    }

    let userValor = Number (input('Amount:'));
    if (userValor < 1) {
        console.log("The amount cannot be less than 1");
    } else if (isNaN(userValor)) {
        console.log("The amount has to be a number");
    } else {
        let resultado = ((userValor * taxas[userTo]) / (taxas[userFrom])).toFixed(4);
        console.log(`Result: ${userValor} ${userFrom} equals ${resultado} ${userTo}`);
    };
}


console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
while (true) {
    console.log("What do you want to do?");
    let opcao = input("1-Convert currencies 2-Exit program\n");
    if (opcao === "2") {
        console.log("Have a nice day!");
        break;
    } else if (opcao === "1") {
        converter();
    } else {
        console.log("Unknown input");
    }
}


