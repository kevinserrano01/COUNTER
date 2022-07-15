const btnIncrementar = document.querySelector('.btn-success')
const btnDecrementar = document.querySelector('.btn-danger')
const numero = document.getElementById('num')
let contador = 0

//EVENTOS DEL BOTON INCREMENTAR ===========================================================>
btnIncrementar.addEventListener('click', () => {
    contador++
    numero.textContent = contador
    console.log('me diste un click')
})

//EVENTOS DEL BOTON DECREMENTAR ===========================================================>
btnDecrementar.addEventListener('click', () => {
    contador--
    numero.textContent = contador
    console.log('me diste un click')
})


