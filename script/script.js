const nome_cognome = document.getElementById('nome-cognome');
const km_da_percorrere = document.getElementById('km-da-percorrere')
const genera_info = document.getElementById('genera-info');
const elimina_info = document.getElementById('elimina-info');

const displayElemento = document.getElementById("display");
const displayElementoTesto = document.getElementById("display-testo");
const info = document.getElementById('test');
const eta = document.getElementById('eta');
const costo_totale = document.getElementById('costo-totale')



genera_info.addEventListener('click', function(){
    const numero_km = km_da_percorrere.value;
    let dati_nome = nome_cognome.value;
    if(dati_nome == ""){
        dati_nome = "Sconosciuto"
    }
    const eta_valore = eta.value;
    info.innerHTML = dati_nome;
    displayElementoTesto.classList.remove("display-nascosto");
    displayElementoTesto.classList.add("display-visibile-testo");
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

elimina_info.addEventListener('click', function(){
    displayElementoTesto.classList.remove("display-visibile-testo");
    displayElementoTesto.classList.add("display-nacosto");
    displayElemento.classList.add("display-nascosto");
    displayElemento.classList.remove("display-visibile");
})

