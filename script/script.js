const nome_cognome = document.getElementById('nome-cognome');
const genera_info = document.getElementById('genera-info');
const info = document.getElementById('test')

genera_info.addEventListener('click', function(){
    const dati_nome = nome_cognome.value;
    info.innerHTML = dati_nome;
})