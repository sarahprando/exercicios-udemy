var altura = 0;
var largura = 0;

function ajustarTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustarTamanho()

function positionRandom() {
    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    var mosquito = document.createElement('img')
    mosquito.src = "./assents/img/mosquito.png"
    mosquito.className = "mosquito1"
    mosquito.style.left = positionX + "px"
    mosquito.style.top = positionY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
}