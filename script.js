
function mudartexto() {
    const nome = prompt('Digite seu nome aqui!') 
    const texto = document.getElementById('texto')
    texto.innerText = `E aí ${nome}! Você está deixando o seu site dinâmico.`
}

let contar = 0
function increment() {
    const contador = document.getElementById('contador')
    contar += 1
    contador.innerText = contar
    const texto = document.getElementById('texto2')
    texto.classList.toggle('p')
}

function zerar() {
    const texto = document.getElementById('texto2')
    texto.innerText = ''
}