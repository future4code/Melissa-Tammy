import {performPurchase, User} from '../../src/ex1/performPurchase'

//Faça um teste com um usuário com o saldo maior do que o valor de compra
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 10
	}

	const result = performPurchase(user, 5)
	
	expect(result).toEqual({
		...user,
		balance: 5
	})
})

//Faça um teste com um usuário com o saldo igual ao valor de compra
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 10
	}

	const result = performPurchase(user, 10)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

//Faça um teste com um usuário com o saldo menor do que o valor de compra
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 0
	}

	const result = performPurchase(user, 10)
	
	expect(result).toEqual(undefined)
})