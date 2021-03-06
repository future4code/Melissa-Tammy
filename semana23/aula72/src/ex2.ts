/*Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tamanho maior do que a string inicial, seu programa deve retornar a string inicial*/

export const repeatedChar = (input: string): string => {
    const substrings: string[] = []; //faz um array de strings com (letra+número de vezes que a letra aparece)
    let lastChar = input[0]; //
    let charCount = 0;
    let loopingCounter = 1
    for (const char of input) {
        console.log(`\n ___Execução nº ${loopingCounter} do laço que compara caractere________________________________________ \n Caractere atual a ser analisado: ${char} \n Ultimo caractere analisado/comparado: ${lastChar}`)
        if (char !== lastChar) {
            console.log(`\n O caractere atual a ser analisado(${char}) é igual ao último caractere analisado(${lastChar})? Não`)
            console.log(`Então adicione '${lastChar}' e '${charCount}' (quantidade de vezes que o '${lastChar}' foi repetido) a array de string 'substrings'`)
            substrings.push(lastChar + charCount);
            console.log(`substring: ${substrings}`)
            lastChar = char;
            charCount = 0;
        } else {
            console.log(`\n O caractere atual a ser analisado(${char}) é igual ao último caractere analisado(${lastChar})? Sim`)
            loopingCounter++
            console.log(`Então contador de repetição = ${charCount}`)
        }
        charCount++;

    }
    substrings.push(lastChar + charCount);

    console.log(`\n Todos caracteres foram analisados, então adicionamos ${lastChar} e ${charCount} a 'substrings' \n Substrings: ${substrings}`)

    let result = "";
    loopingCounter = 1;
    console.log(`\n Agora inicia-se o laço que analisa cada string da array de strings 'substrings', e concatena todas strings em apenas uma: `)
    for (const key of substrings) {
        result += key;
        console.log(`\n ___Execução nº ${loopingCounter} da análise da substrings________________________________________ \n String analisada: ${key} \n adicionamos ${key} a string 'resultado' \n Resultado atual: ${result}`)
        loopingCounter++
    }
    console.log(`\n __________________________________________________________________________________ \n \n O tamanho da string resultado '${result}' é maior que a string inicial '${input}'?`)
    result.length > (input.length) ? (console.log(`Sim, então o return desse método será: ${input}`)) : (console.log(`Sim, então o return desse método será: '${result}'`))
    return result.length > (input.length) ? (input) : (result);
}


/*
export const stringCompression = (input: string): string => {
    const substrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }

    return result.length > input.length ? input : result;
};
*/