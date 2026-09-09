// Declaração de variáveis

let indice = 0

let imagens = [
    "img/bolo1.jpg",
    "img/bolo2.jpg",
    "img/bolo3.jpg"
]

// Função que troca a imagem

function trocar() {

    let img = document.getElementById("img")

    img.src = imagens[indice]
}

// Lógica

setInterval(function () {

    trocar()
    indice++

    if (indice >= imagens.length) {
        indice = 0
    }

}, 1800
)
