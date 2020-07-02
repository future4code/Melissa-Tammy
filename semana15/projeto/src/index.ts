import { Teacher, TEACHER_SPECIALTY } from './Teacher'
import { Student } from './Student'
import { Mission } from './Mission'
import { NightMission } from './NightMission'
import { FullTimeMission } from './FullTimeMission'
import { User } from './User'
import moment from "moment"

let option: string|number = process.argv[2]
switch (option) {
    case 'CreateStudent'||1:
        try {
            let newHobby: string = process.argv[3]
            let newId: number = Number(process.argv[4])
            let newName: string = process.argv[5]
            let newEmail: string = process.argv[6]
            let newBirth: moment.Moment = moment(process.argv[7], "DD/MM/YYYY")
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateTeacher'||2:
        try {
            let newExpertise: TEACHER_SPECIALTY[] = []
            let newId: number = Number(process.argv[4])
            let newName: string = process.argv[5]
            let newEmail: string = process.argv[6]
            let newBirth: moment.Moment = moment(process.argv[7], "DD/MM/YYYY")
        }
        catch{
            console.log("Erro")
        }
        break;
    case 'CreateMission'||3:

        break;
    case 'AddStudentToMission'||4:

        break;
    case 'AddTeacherToMission'||5:

        break;
    case 'getAgeById':

        break;
    default:
        console.log("ERRO: option entered incorrectly")
        break;
}