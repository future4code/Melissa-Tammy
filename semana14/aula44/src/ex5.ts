enum sigla {
    DC = "dc",
    AC = "ac"
}

function descobreIdadeHistorica(ano: number, siglaInserida: sigla | null) {
    if (siglaInserida === sigla.AC) {
        ano *= -1
    } else {
        siglaInserida = sigla.DC
    }
    let idade: string = ""
    if (ano < -Infinity && ano > -100000) {
        if (siglaInserida === sigla.AC) {
            ano *= -1
        }
        idade = "Pré-história"
    }
    if (ano >= -4000 && ano < 476) {
        if (siglaInserida === sigla.AC) {
            ano *= -1
        }
        idade = "Idade Antiga"
    }
    if (ano >= 476 && ano < 1453) {
        idade = "Idade Média"
    }
    if (ano >= 1453 && ano < 1789) {
        idade = "Idade Moderna"
    }
    if (ano >= 1789 && ano < 2021) {
        idade = "Idade Contemporânea"
    }

    if (((siglaInserida === sigla.AC) || (siglaInserida === sigla.DC) || (siglaInserida === null)) && (ano < 2021)) {
        return console.log(ano, siglaInserida.toLocaleUpperCase(), "encontra-se dentro do período: ", idade)
    } else {
        return console.log("Dados incorretos")
    }

}

descobreIdadeHistorica(5000, sigla.AC)
descobreIdadeHistorica(1, sigla.AC)
descobreIdadeHistorica(1, sigla.DC)
descobreIdadeHistorica(1500, sigla.DC)
descobreIdadeHistorica(2020, sigla.DC)
descobreIdadeHistorica(2025, sigla.DC)
descobreIdadeHistorica(1, null)
descobreIdadeHistorica(1500, null)
descobreIdadeHistorica(2020, null)
descobreIdadeHistorica(2025, null)
