import {validateCharacter} from '../../src/ex1/ValidateCharacter'

//a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });   

//b. Crie um teste que verifique o comportamento da função com um personagem com a vida vazia
test("Should return false for life = 0", () => {
    const result = validateCharacter({
      name: "name test",
      life: undefined,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });   
//c. Crie um teste que verifique o comportamento da função com um personagem com a força vazia
test("Should return false for strength = 0", () => {
    const result = validateCharacter({
      name: "name test",
      life: 1,
      strength: undefined,
      defense: 500,
    });

    expect(result).toBe(false);
  });   
//d. Crie um teste que verifique o comportamento da função com um personagem com a defesa vazia
test("Should return false for defense = 0", () => {
    const result = validateCharacter({
      name: "name test",
      life: 1,
      strength: 1,
      defense: undefined,
    });

    expect(result).toBe(false);
  });   
//e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
test("Should return false for any < 0", () => {
    const result = validateCharacter({
      name: "name test",
      life: -1,
      strength: 1,
      defense: 1,
    });

    expect(result).toBe(false);
  });  
//f. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor `0`
test("Should return true for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
//g. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });