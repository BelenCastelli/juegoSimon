let play = document.getElementById("play")

let blue = document.getElementById("blue")
let red = document.getElementById("red")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")

let colors = ["blue","red","green","yellow"]
let btnColors = [blue, red, green, yellow]
let secuencia =[]
let respuesta = [];
let esCorrecta;


function secuenciaAleatoria() {
   
    let indiceAletorio = Math.floor(Math.random() * colors.length)
    secuencia.push(btnColors[indiceAletorio])
    console.log(secuencia);
    return secuencia
}

function iluminarSecuenciaAleatoria(){
    secuencia= secuenciaAleatoria()
    for(let i = 0; i < secuencia.length; i++){
        setTimeout (() => {
            secuencia[i].style.filter = "brightness(550%)";
            setTimeout(() => {
                secuencia[i].style.filter = ""
            }, 1000)
        }, i * 1500)
    }
    respuesta = []
    esCorrecta = undefined
    return secuencia
}
    
function clickUsuario(color) {
    respuesta.push(color);
    console.log(respuesta);
    return respuesta
}

function comprobarRespuesta(secuencia, respuesta) {
    
    if(secuencia.length != respuesta.length){
        alert("Respuesta Incorrecta. Pulsa Jugar y prueba otra vez")
        reset()

    }else if (secuencia.length == respuesta.length){
            for(let i = 0; i < secuencia.length; i++ ){
                if(secuencia[i] === respuesta[i]) {
                    esCorrecta = true
                } else if (secuencia[i] !== respuesta[i]){
                    esCorrecta = false
                }
            }
            
        if (esCorrecta == true){
            alert("¡Respuesta Correcta, sigue así. Pulsa Continuar")
        } else if (esCorrecta == false) {
            alert("Respuesta Incorrecta. Pulsa Jugar y prueba otra vez")
            reset()
        }
        return esCorrecta   
    }
}

function continuar(){
    
    if(esCorrecta == false){
        reset()
        
    } else if (esCorrecta == true) 
    iluminarSecuenciaAleatoria()
}

function reset(){
    location.reload()
}

