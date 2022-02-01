function Tempo(){
    var display = document.querySelector('.display')

var agora = new Date()

var horario = definirhorario(agora.getHours()) + ':' + definirhorario(agora.getMinutes()) + ':' + definirhorario(agora.getSeconds())

display.textContent = horario
}
function definirhorario(numero){
    if (numero < 10){
        numero = '0' + numero
    }
    return numero
}
Tempo()
setInterval(Tempo, 1000)

console.log(horario)