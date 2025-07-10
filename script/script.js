const nome_cognome = document.getElementById('nome-cognome');
const km_da_percorrere = document.getElementById('km-da-percorrere')
const genera_info = document.getElementById('genera-info');
const elimina_info = document.getElementById('elimina-info');

const displayElemento = document.getElementById("display");
const info = document.getElementById('test');
const eta = document.getElementById('eta');
const costo_totale = document.getElementById('costo-totale')


genera_info.addEventListener('click', function(){
    const numero_km = km_da_percorrere.value;
    const dati_nome = nome_cognome.value;
    const eta_valore = eta.value;
    info.innerHTML = dati_nome;
    displayElemento.classList.remove("display-nascosto");
    displayElemento.classList.add("display-visibile");

    let prezzo = numero_km * 0.21;
    console.log(prezzo)
    if(eta_valore == 1){
        prezzo = prezzo - (prezzo * 0.20);
        prezzo = prezzo.toFixed(2);
    }
    else if(eta_valore == 2){
        prezzo = prezzo-(prezzo * 0.40);
        prezzo = prezzo.toFixed(2);
    }
    costo_totale.innerHTML = prezzo
})

