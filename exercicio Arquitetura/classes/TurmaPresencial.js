import { Turma } from './Turma'

class TurmaPresencial extends Turma{
    constructor({codigo,nota,frequencia}){
        super({codigo,nota})
        this._frequencia = frequencia
    }

    aprovado(){
        return super.aprovado() && frequencia >= 10
    }
}


module.exports = {TurmaPresencial};