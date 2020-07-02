import { Teacher } from './Teacher'
import { Student } from './Student'
import { Mission } from './Mission'
import { NightMission } from './NightMission'
import { FullTimeMission } from './FullTimeMission'

/*
→ Criar estudante;
→ Criar docente;
→ Criar turma;
→ Adicionar estudante na turma;
→ Adicionar docente na turma;
→ Pegar a idade de algum estudante a partir do id
*/
let option: string = process.argv[2]
switch (option) {
    case 'CreateStudent':
        
        break;
    case 'CreateTeacher':

        break;
    case 'CreateMission':

        break;
    case 'AddStudentToMission':

        break;
    case 'AddTeacherToMission':

        break;
    case 'getAgeById':

        break;
    default:
        console.log("ERRO: option entered incorrectly")
        break;
}