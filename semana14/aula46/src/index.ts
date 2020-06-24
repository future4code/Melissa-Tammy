import { MemoryMeasurement } from "vm";
import moment from 'moment'
import * as fs from 'fs'

moment.locale("pt-br")
type typeEvent = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: typeEvent[] = [
    {
        name: "Reunião",
        description: "Reunião muito importante",
        startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Reuniãozinha",
        description: "Reunião não muito importante",
        startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
    }
]

function imprime(array: typeEvent[]) {
    array.map((evento) => {
        const duration = evento.finishAt.diff(evento.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = evento.startAt.diff(today, "days");
        console.log(`
        Nome: ${evento.name}
        Horário de início: ${evento.startAt.format("DD [de] MMMM [de] YYYY HH:mm")}
        Horário de fim: ${evento.finishAt.format("DD [de] MMMM [de] YYYY HH:mm")}
        Descrição: ${evento.description}
        Duração: ${duration} minutos
        Dias até o evento: ${daysUntilEvent}`)
    })
}

let nameInput: string = process.argv[2]
let descriptionInput: string = process.argv[3]
let startAtInput: moment.Moment = moment(process.argv[4], "DD/MM/YYYY HH:mm")
let finishAtInput: moment.Moment = moment(process.argv[5], "DD/MM/YYYY HH:mm")

function createEvent(nameInput: string, descriptionInput: string, startAtInput: moment.Moment, finishAtInput: moment.Moment):void {
    let newEvent: any = {
        name: nameInput,
        description: descriptionInput,
        startAt: startAtInput,
        finishAt: finishAtInput
    }
    allEvents.push(newEvent);
}
createEvent(nameInput, descriptionInput, startAtInput, finishAtInput)
imprime(allEvents)
console.log("Para alterar o fuso deve-se acrescentar .utcOffset('+0100')")