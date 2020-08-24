import { oneEdit } from '../src/ex1'


test("'banan' é 'one edit' de 'banana'", () => {
	const result = oneEdit("banan", "banana")
	
	expect(result).toEqual(true)
})

test("'bananak' é 'one edit' de 'banana'", () => {
	const result = oneEdit("bananak", "banana")
	
	expect(result).toEqual(true)
})

test("'panana' é 'one edit' de 'banana'", () => {
	const result = oneEdit("panana", "banana")
	
	expect(result).toEqual(true)
})

test("'bananaaa' não é 'one edit' de 'banana'", () => {
	const result = oneEdit("bananaaa", "banana")
	
	expect(result).toEqual(false)
})