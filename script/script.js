const nome_cognome = document.getElementById('nome-cognome');
const genera_info = document.getElementById('genera-info');

const displayElemento = document.getElementById("display");

const info = document.getElementById('test');

genera_info.addEventListener('click', function(){
    const dati_nome = nome_cognome.value;
    info.innerHTML = dati_nome;
    displayElemento.classList.remove("display-nascosto");
    displayElemento.classList.add("display-visibile");
})