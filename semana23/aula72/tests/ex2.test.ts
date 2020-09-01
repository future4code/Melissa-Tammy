import { repeatedChar } from '../src/ex2'

test("Para o input 'aabbb' o resultado deve ser 'a2b3'", () => {
	const result = repeatedChar("aabbb")
	
	expect(result).toEqual('a2b3')
})

test("Para o input 'aabcccccaaa' o resultado deve ser 'a2b1c5a3'", () => {
	const result = repeatedChar("aabcccccaaa")
	
	expect(result).toEqual('a2b1c5a3')
})

test("Para o input 'accurate' o resultado deve ser 'accurate'", () => {
	const result = repeatedChar("accurate")
	
	expect(result).toEqual('accurate')
})

test("Para o input 'escola' o resultado deve ser 'escola'", () => {
	const result = repeatedChar("escola")
	
	expect(result).toEqual('escola')
})

test("Para o input 'accuraaaaaaaaaate', o resultado deve ser 'a1c2u1r1a10t1e1'", () => {
	const result = repeatedChar("accuraaaaaaaaaate")
	
	expect(result).toEqual('a1c2u1r1a10t1e1')
})