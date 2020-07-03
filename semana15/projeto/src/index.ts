import { Teacher, TEACHER_SPECIALTY } from './Teacher'
import { Student } from './Student'
import { Mission } from './Mission'
import { NightMission } from './NightMission'
import { FullTimeMission } from './FullTimeMission'
import { User } from './User'
import moment from "moment"
import { FileManager } from './FileManager'

/*Escolhe o tipo de ação desejada no sistema, opções:
CreateStudent - estanciar um Student
CreateTeacher - estanciar um Teacher
CreateMission - estanciar uma Mission
AddStudentToMission TODO
AddTeacherToMission TODO
getAgeById TODO
*/
let option: string | number = process.argv[2]

//Estancia os FileManager
const fmStudents = new FileManager("students.json")
const fmTeachers = new FileManager("teachers.json")
const fmMissions = new FileManager("missions.json")

//Atribui o conteúdo dos arquivos a uma variável que será responsável por auxiliar as alterações nos arquívos
let arraySudents = fmStudents.readFile()
let arrayTeachers = fmTeachers.readFile()
let arrayMissions = fmMissions.readFile()

//Separa o arrayMissions por cursos integrais e noturnos
let arrayFullTimeMission = arrayMissions.fullTime
let arrayNightMission = arrayMissions.naNight

//Variáveis auxiliares na criação de uma nova Mission
let typeCreate: any = Student
let name = ''

//Função que cria student, teacher e mission e altera os respectivos arquivos 
function create(newInstance: Student | Teacher | Mission, array: any, fm: any) {
    //A manipulação do arquívo missions é diferente por conter 2 arrays dentro do mesmo arquivo, separando as turmas por período
    if (typeCreate=== Mission) {
            let fullTime = arrayFullTimeMission
            let naNight = arrayNightMission
            console.log("chegou")
            array.push(newInstance)
            fm.writeFile({ fullTime, naNight })
    } else {
        array.push(newInstance)
        fm.writeFile(array)
    }
}

switch (option) {
    case 'CreateStudent':
        typeCreate = Student
        try {
            const fm = new FileManager("students.json")
            let newStudent = new Student(
                process.argv[3],
                Number(process.argv[4]),
                process.argv[5],
                process.argv[6],
                moment(process.argv[7], "DD/MM/YYYY")
            )
            create(newStudent, arraySudents, fmStudents)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateTeacher':
        typeCreate = Teacher
        try {
            let aux: any[] = process.argv[3].split(',').map(item => {
                return item
            })
            let newTeacher = new Teacher(
                aux,
                Number(process.argv[4]),
                process.argv[5],
                process.argv[6],
                moment(process.argv[7], "DD/MM/YYYY")
            )
            create(newTeacher, arrayTeachers, fmTeachers)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateMission':
        typeCreate = Mission
        try {
            name = process.argv[9]
            let aux: boolean = true
            let term = FullTimeMission
            let auxArray = arrayFullTimeMission
            if (name.indexOf("-na-night") !== -1) {
                aux = false
                auxArray = arrayNightMission
            }
            console.log(aux)
            aux ? (term = FullTimeMission) : (term = NightMission)
            console.log(term)
            let teachers: any[] = process.argv[6].split(',').map(item => {
                return item
            })
            let students: any[] = process.argv[7].split(',').map(item => {
                return item
            })

            let newMission = new term(
                Number(process.argv[3]),
                moment(process.argv[4], "DD/MM/YYYY"),
                moment(process.argv[5], "DD/MM/YYYY"),
                teachers,
                students,
                Number(process.argv[8]),
                name
            )
            newMission.setName(process.argv[10])
            create(newMission, auxArray, fmMissions)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'AddStudentToMission':

        break;
    case 'AddTeacherToMission':

        break;
    case 'getAgeById':

        break;
    default:
        console.log("Erro")
        break;
}

