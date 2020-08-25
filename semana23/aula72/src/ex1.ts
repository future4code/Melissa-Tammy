/*
Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
*/

export const isOneEditStringGabarito = (
  source: string,
  comparision: string
): boolean => {
  if (
    comparision.length > source.length + 1 ||
    comparision.length < source.length - 1
  ) {
    return false;
  }
  let communCharQuantity = 0;

  for (const char of comparision) {
    if (source.indexOf(char) !== -1) {
      communCharQuantity++;
    }
  }
  return (
    communCharQuantity <= source.length + 1 &&
    communCharQuantity >= source.length - 1
  );
};

export const isOneEditString = (
  input: string,
  source: string
): boolean => {
  if (
    input.length > source.length + 1 ||
    input.length < source.length - 1
  ) {
    return false;
  }
  let count = 0
  let count2 = 0
  for (let i = 0; i < source.length; i++) {
    if (input[i] === source[i]) {
      count++
    }
    if (input[i + 1] === source[i]) {
      count2++
    }
  }
  if (count2 === source.length && input.length === source.length + 1) {
    return true
  }
  if (
    (count === source.length && input.length === source.length) || 
    (count === source.length - 1 && input.length === source.length + 1) || 
    (count < source.length - 1)) {
    return false
  }
  return true
};
