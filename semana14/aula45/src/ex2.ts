let op: string = process.argv[2]
let num1: number = Number(process.argv[3])
let num2: number = Number(process.argv[4])

function operacoes(op: string, num1: number, num2: number) {
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
            console.log("dados inválidos")
            break;
    }
}

operacoes(op, num1, num2)