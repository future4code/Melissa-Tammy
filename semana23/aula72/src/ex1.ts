/*
Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
*/

export const oneEdit = (input: string, source: string): boolean =>{
    if(input.length > source.length + 1 || input.length < source.length - 1){
        return false
    }
    let communCharQuantity = 0;

  for (const char of input) {
    if (source.indexOf(char) !== -1) {
      communCharQuantity++;
    }
  }
  return (
    communCharQuantity <= source.length + 1 &&
    communCharQuantity >= source.length - 1
  );
}