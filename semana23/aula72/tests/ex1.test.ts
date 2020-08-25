import { isOneEditStringGabarito } from '../src/ex1'
import { isOneEditString } from '../src/ex1'


test("Gabarito: 'banan' é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("banan", "banana")
	
	expect(result).toEqual(true)
})

test("Gabarito: 'bananak' é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("bananak", "banana")
	
	expect(result).toEqual(true)
})

test("Gabarito: 'panana' é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("panana", "banana")
	
	expect(result).toEqual(true)
})

test("Gabarito: 'bananaaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("bananaaa", "banana")
	
	expect(result).toEqual(false)
})

test("Gabarito: 'nabbbbb' não é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("nabbbbb", "banana")
	
	expect(result).toEqual(false)
})

test("Gabarito: 'ananab' não é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("nabbbbb", "banana")
	
	expect(result).toEqual(false)
})

test("Gabarito: 'bananaa' é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("bananaa", "banana")
	
	expect(result).toEqual(true)
})

test("Gabarito: 'aananaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("aananaa", "banana")
	
	expect(result).toEqual(false)
})

test("Gabarito: 'abanana' é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("abanana", "banana")
	
	expect(result).toEqual(true)
})

test("Gabarito: 'abanaaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditStringGabarito("abanaaa", "banana")
	
	expect(result).toEqual(false)
})

test("'banan' é 'one edit' de 'banana'", () => {
	const result = isOneEditString("banan", "banana")
	
	expect(result).toEqual(true)
})

test("'bananak' é 'one edit' de 'banana'", () => {
	const result = isOneEditString("bananak", "banana")
	
	expect(result).toEqual(true)
})

test("'panana' é 'one edit' de 'banana'", () => {
	const result = isOneEditString("panana", "banana")
	
	expect(result).toEqual(true)
})

test("'bananaaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditString("bananaaa", "banana")
	
	expect(result).toEqual(false)
})

test("'nabbbbb' não é 'one edit' de 'banana'", () => {
	const result = isOneEditString("nabbbbb", "banana")
	
	expect(result).toEqual(false)
})

test("'ananab' não é 'one edit' de 'banana'", () => {
	const result = isOneEditString("nabbbbb", "banana")
	
	expect(result).toEqual(false)
})

test("'bananaa' é 'one edit' de 'banana'", () => {
	const result = isOneEditString("bananaa", "banana")
	
	expect(result).toEqual(true)
})

test("'aananaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditString("aananaa", "banana")
	
	expect(result).toEqual(false)
})

test("'abanana' é 'one edit' de 'banana'", () => {
	const result = isOneEditString("abanana", "banana")
	
	expect(result).toEqual(true)
})

test("'abanaaa' não é 'one edit' de 'banana'", () => {
	const result = isOneEditString("abanaaa", "banana")
	
	expect(result).toEqual(false)
})