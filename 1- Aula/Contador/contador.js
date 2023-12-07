const adicionar = document.getElementById ('add');
var resultado = document.getElementById('resultado');
const incremente = 1++
adicionar.addEventListener("click", function aumentar(){

    const total = document.getElementById('resultado');
    total.textContent = total + incremente;
})