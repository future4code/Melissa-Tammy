const arr: number[] = [0, 1, 2, 3, 5, 8, 13, 21]
function funcArray(array: number[]): void {
    let quantidade: number = array.length
    let impares: number[] = []
    let soma: number = 0

    array.map((num: number) =>{
        soma += num
        if (num % 2 !== 0){
            impares.push(num)
        }
        return impares
    })
    return console.log("Quantidade de números na array: ", quantidade, "\nQuantidade de números ímpares: ", impares.length, "\nSoma de todos elementos: ", soma)
}
console.log("Array: ", arr)
funcArray(arr)