import { repeatedChar } from '../src/ex2'


test("'banan' é 'one edit' de 'banana'", () => {
	const result = repeatedChar("banan")
	
	expect(result).toEqual(true)
})

test("'bananak' é 'one edit' de 'banana'", () => {
	const result = repeatedChar("bananak")
	
	expect(result).toEqual(true)
})

test("'panana' é 'one edit' de 'banana'", () => {
	const result = repeatedChar("panana")
	
	expect(result).toEqual(true)
})

test("'bananaaa' não é 'one edit' de 'banana'", () => {
	const result = repeatedChar("bananaaa")
	
	expect(result).toEqual(false)
})