const moment = require ('moment')

let dataInicial = moment ('2020-05-15')
let dataFinal = moment ('2021-05-15')
var diffDias = dataFinal.diff(dataInicial, 'days')
var diffMeses = dataFinal.diff(dataInicial, 'months')
console.log(diffDias)
console.log(diffMeses)