import { Teacher, TEACHER_SPECIALTY } from './Teacher'
import { Student } from './Student'
import { Mission } from './Mission'
import { NightMission } from './NightMission'
import { FullTimeMission } from './FullTimeMission'
import { User } from './User'
import moment from "moment"
import { FileManager } from './FileManager'



let option: string | number = process.argv[2]
const fmStudents = new FileManager("students.json")
const fmTeachers = new FileManager("teachers.json")
const fmMissions = new FileManager("missions.json")
let arraySudents = fmStudents.readFile()
let arrayTeachers = fmTeachers.readFile()
let arrayMissions = fmMissions.readFile()

function createStudent(newStudent: Student): void {
    arraySudents.push(newStudent)
    fmStudents.writeFile(arraySudents)
}
function createTeacher(newTeacher: Teacher): void {
    arrayTeachers.push(newTeacher)
    fmTeachers.writeFile(arrayTeachers)
}
function createMission(newMission: Mission): void {
    arrayMissions.push(newMission)
    fmMissions.writeFile(arrayMissions)
}

switch (option) {
    case 'CreateStudent':
        try {
            const fm = new FileManager("students.json")
            let newStudent = new Student(
                process.argv[3],
                Number(process.argv[4]),
                process.argv[5],
                process.argv[6],
                moment(process.argv[7], "DD/MM/YYYY")
            )
            createStudent(newStudent)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateTeacher':
        try {
            let aux: any[] = process.argv[3].split(',').map(item =>{
                return item
            })
            let newTeacher = new Teacher(
                aux,
                Number(process.argv[4]),
                process.argv[5],
                process.argv[6],
                moment(process.argv[7], "DD/MM/YYYY")
            )
            createTeacher(newTeacher)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateMission':
        let newid: Number = Number(process.argv[3])
        let newStartDate: moment.Moment = moment(process.argv[4], "DD/MM/YYYY")
        let newEndDate: moment.Moment = moment(process.argv[5], "DD/MM/YYYY")
        let newTeachers: Teacher[] = JSON.parse("[" + process.argv[6] + "]")
        let newStudents: Student[] = JSON.parse("[" + process.argv[7] + "]")
        let newCurrentModule: number | undefined = Number(process.argv[8])
        break;
    case 'AddStudentToMission':

        break;
    case 'AddTeacherToMission':

        break;
    case 'getAgeById':
        let separator = ','
        console.log((process.argv[3]).split(','))
        break;
    default:
        console.log("ERRO: option entered incorrectly")
        break;
}

