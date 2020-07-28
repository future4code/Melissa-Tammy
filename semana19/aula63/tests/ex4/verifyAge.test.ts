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

//Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil
test("1 brazilian allowed", () => {
    const result = verifyAge(casinoBR, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["UserName Test BR"]);
});

//Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil
test("1 american allowed", () => {
    const result = verifyAge(casinoBR, [american]);
    expect(result.americans.allowed).toEqual(["UserName Test EUA"]);
});

//Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.
test("2 americans and 2 brazilians unallowed", () => {
    const result = verifyAge(casinoEUA, array1);
    expect(result).toEqual({
        brazilians: {
            allowed: [],
            unallowed: ["UserName Test BR", "UserName Test BR1"]
        },
        americans: {
            allowed: [],
            unallowed: ["UserName Test EUA", "UserName Test EUA1"]
        }

    });
});

//Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.
test("2 americans allowed and 2 brazilians unallowed", () => {
    const result = verifyAge(casinoEUA, array2);
    expect(result).toEqual({
        brazilians: {
            allowed: [],
            unallowed: ["UserName Test BR", "UserName Test BR1"]
        },
        americans: {
            allowed: ["UserName Test EUA2", "UserName Test EUA3"],
            unallowed: []
        }

    });
});