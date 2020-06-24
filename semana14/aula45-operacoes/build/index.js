"use strict";
var op = process.argv[2];
var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[4]);
function operacoes(op, num1, num2) {
    switch (op) {
        case 'add':
            console.log(num1 + num2);
            break;
        case 'sub':
            console.log(num1 - num2);
            break;
        case 'mul':
            console.log(num1 * num2);
            break;
        case 'div':
            console.log(num1 / num2);
            break;
        default:
            console.log("dados inválidos");
            break;
    }
}
operacoes(op, num1, num2);
//# sourceMappingURL=index.js.map