import * as fs from 'fs'

let tarefa:string = process.argv[3]
let fileText: string = process.argv[2]
fs.appendFileSync(fileText, tarefa)