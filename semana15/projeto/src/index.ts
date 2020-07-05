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
AddStudentToMission 
AddTeacherToMission 
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
let name: string = ''
let id: number = 0
//Função que cria student, teacher e mission e altera os respectivos arquivos 
function create(newInstance: Student | Teacher | Mission, array: any, fm: any) {
    //A manipulação do arquívo missions é diferente por conter 2 arrays dentro do mesmo arquivo, separando as turmas por período
    if (typeCreate === Mission) {
        let fullTime = arrayFullTimeMission
        let naNight = arrayNightMission
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
            create(newMission, auxArray, fmMissions)
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'AddStudentToMission':
        name = process.argv[3]
        let newStudent = new Student(
            process.argv[4],
            Number(process.argv[5]),
            process.argv[6],
            process.argv[7],
            moment(process.argv[8], "DD/MM/YYYY")
        )
        let fullTime = arrayFullTimeMission
        let naNight = arrayNightMission
        try {
            if (name.indexOf("-na-night") == -1) {
                const auxArrayFullTimeMission = arrayFullTimeMission.map((item: any) =>
                    new FullTimeMission(
                        item.id,
                        item.startDate,
                        item.endDate,
                        item.teachers,
                        item.students,
                        item.currentModule,
                        item.name)
                )
                auxArrayFullTimeMission.map((item: Mission) => {
                    if (item.getName() === name) {
                        item.addStudent(newStudent.name)
                    }
                })
                fullTime = auxArrayFullTimeMission
                fmMissions.writeFile({ fullTime, naNight })
            } else {
                console.log(name)
                const auxArrayNightMission = arrayNightMission.map((item: any) =>
                    new NightMission(
                        item.id,
                        item.startDate,
                        item.endDate,
                        item.teachers,
                        item.students,
                        item.currentModule,
                        item.name)
                )
                auxArrayNightMission.find((item: Mission) => {
                    if (item.getName() === name) {
                        item.addStudent(newStudent.name)
                    }
                })
                console.log(auxArrayNightMission)

                naNight = auxArrayNightMission
                fmMissions.writeFile({ fullTime, naNight })
            }

        } catch{
            console.log("erro")
        }
        break;
    case 'AddTeacherToMission':
        name = process.argv[3]
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
        try {
            let fullTime = arrayFullTimeMission
            let naNight = arrayNightMission
            if (name.indexOf("-na-night") == -1) {
                const auxArrayFullTimeMission = arrayFullTimeMission.map((item: any) =>
                    new FullTimeMission(
                        item.id,
                        item.startDate,
                        item.endDate,
                        item.teachers,
                        item.students,
                        item.currentModule,
                        item.name)
                )
                auxArrayFullTimeMission.map((item: Mission) => {
                    if (item.getName() === name) {
                        item.addTeacher(newTeacher.name)
                    }
                })
                fullTime = auxArrayFullTimeMission
                fmMissions.writeFile({ fullTime, naNight })
            } else {
                console.log(name)
                const auxArrayNightMission = arrayNightMission.map((item: any) =>
                    new NightMission(
                        item.id,
                        item.startDate,
                        item.endDate,
                        item.teachers,
                        item.students,
                        item.currentModule,
                        item.name)
                )
                auxArrayNightMission.find((item: Mission) => {
                    if (item.getName() === name) {
                        item.addTeacher(newTeacher.name)
                    }
                })
                console.log(auxArrayNightMission)

                naNight = auxArrayNightMission
                fmMissions.writeFile({ fullTime, naNight })
            }

        } catch{
            console.log("erro")
        }
        break;
    case 'getAgeById':
        let auxId = process.argv[3]
        arraySudents.map((item: any) => {
            if (item.id === auxId) {
            }
        })
        break;
    default:
        console.log("Erro")
        break;
}

