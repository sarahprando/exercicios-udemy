var vidas = 1;
var altura = 0;
var largura = 0;
var tempo = 15;

function ajustarTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustarTamanho()

var cronometro = setInterval(function(){

    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(clearMosquito)
        alert('Vitória')
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function positionRandom() {

    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if (vidas > 3) {
            window.location.href = "game-over.html"
        } else {
            document.getElementById('v' + vidas).src = "./assents/img/coracao_vazio.png"

            vidas++
        }
    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    var mosquito = document.createElement('img')
    mosquito.src = "./assents/img/mosquito.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = positionX + "px"
    mosquito.style.top = positionY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return "mosquito1"

        case 1:
            return "mosquito2"

        case 2:
            return "mosquito3"
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"
    }
}