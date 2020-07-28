import { verifyAge, LOCATION, NACIONALITY, User, Casino, Result, ResultItem } from '../../src/ex3/verifyAge'

const brazilian: User = {
    name: "UserName Test BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
};
const american: User = {
    name: "UserName Test EUA",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
};
const brazilian1: User = {
    name: "UserName Test BR1",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
};
const american1: User = {
    name: "UserName Test EUA1",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
};
const american2: User = {
name: "UserName Test EUA2",
age: 21,
nacionality: NACIONALITY.AMERICAN,
};
const american3: User = {
name: "UserName Test EUA3",
age: 21,
nacionality: NACIONALITY.AMERICAN,
};

const casinoBR: Casino = {
    name: "CasinoName Test BR",
    location: LOCATION.BRAZIL,
};
const casinoEUA: Casino = {
    name: "CasinoName Test EUA",
    location: LOCATION.EUA,
};

const array1: User[] = [
    brazilian,
    brazilian1,
    american,
    american1
]

const array2: User[] = [
    brazilian,
    brazilian1,
    american2,
    american3
]

//a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o **tamanho do array allowed** da propriedade **brasilians** tenha tamanho menor do que 2 e maior do que 0.*
test("1 brazilian allowed", () => {
    const result = verifyAge(casinoBR, [brazilian]);
    expect(result.brazilians.allowed.length>0 && result.brazilians.allowed.length<2).toEqual(true);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
});

//b. Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o **tamanho do array unallowed** da propriedade **americans** tenha tamanho igual a 0.*
test("1 american allowed", () => {
    const result = verifyAge(casinoBR, [american]);
    expect(result.americans.unallowed.length==0).toEqual(true);
    expect(result.americans.unallowed.length).toBe(0);
});

//c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays **unallowed** possuam o nome de algum dos usuários que você criou*
test("1 american allowed", () => {
    const result = verifyAge(casinoEUA, array1);
    expect(result.brazilians.unallowed).toContain("UserName Test BR1");
    expect(result.americans.unallowed).toContain("UserName Test EUA");
});

//d*. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o **tamanho do array unallowed** da propriedade **brasilians** tenha tamanho maior do que 1. Verifique que o **tamanho do array unallowed** da propriedade **americans** tenha tamanho menor do que 1. Verifique que o **tamanho do array allowed** da propriedade **ame** tenha tamanho igual a 2.*
test("1 american allowed", () => {
    const result = verifyAge(casinoEUA, array2);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
});